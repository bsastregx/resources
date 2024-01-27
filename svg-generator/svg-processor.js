import { glob } from "glob";
import { readFileSync, writeFile, existsSync, mkdirSync } from "fs";
import { dirname, basename, join } from "path";
import { optimize } from "svgo";
import * as cheerio from "cheerio";

const REGEX_SIZE = new RegExp(
  "<svg.*viewbox=['\"]([\\d\\s]+)['\"][^>]*>",
  "is"
);
const REGEX_CONTENT = new RegExp("<svg[^>]*>(.*)<\\/svg>", "is");
const REGEX_USED_VARS = new RegExp("--icons-\\d\\d", "g");
const REGEX_REMOVE_VARS = new RegExp("--icons-\\d\\d:[^;]+;", "g");
const template = readAllTextFile("template.svg");
const files = await glob(process.argv[2]);

files.forEach((file) => {
  processSvg(readAllTextFile(file), getOutputPaths(file));
});

function readAllTextFile(file) {
  try {
    return readFileSync(file, "utf8");
  } catch (err) {
    throw err;
  }
}

function getOutputPaths(file) {
  const baseDirectory = dirname(file);
  const directoryLight = join(baseDirectory, "light");
  const directoryDark = join(baseDirectory, "dark");
  const fileName = basename(file);

  if (!existsSync(directoryLight)) {
    mkdirSync(directoryLight);
  }
  if (!existsSync(directoryDark)) {
    mkdirSync(directoryDark);
  }

  return {
    light: join(directoryLight, fileName),
    dark: join(directoryDark, fileName),
  };
}

function processSvg(data, output) {
  const size = getSize(data);
  const content = getContent(data);
  let svg = template;

  svg = setSize(svg, size.width, size.height);
  svg = setContent(svg, content);
  svg = setX(svg, size.width);
  svg = removeUnusedVars(svg, content);

  writeAllTextFile(output.light, compressSvg(setColorScheme(svg, "light")));
  writeAllTextFile(output.dark, compressSvg(setColorScheme(svg, "dark")));
}

function getSize(data) {
  const [x, y, width, height] = data.match(REGEX_SIZE)[1].split(" ");

  return {
    x,
    y,
    width,
    height,
  };
}

function getContent(data) {
  return data.match(REGEX_CONTENT)[1];
}

function setSize(svg, width, height) {
  return svg.replaceAll("$width$", width).replaceAll("$height$", height);
}

function setContent(svg, content) {
  return svg.replace("$content$", content);
}

function setX(svg, width) {
  const size = parseInt(width);

  return svg
    .replaceAll("$x-enabled$", size * 0)
    .replaceAll("$x-hover$", size * 1)
    .replaceAll("$x-active$", size * 2)
    .replaceAll("$x-disabled$", size * 3);
}

function removeUnusedVars(svg, content) {
  const usedVars = content.match(REGEX_USED_VARS);

  return svg.replace(REGEX_REMOVE_VARS, (match) => {
    if (usedVars.includes(match.slice(0, 10))) {
      return match;
    }
    return "";
  });
}

function setColorScheme(svg, colorScheme) {
  return svg.replaceAll("$color-scheme$", colorScheme);
}

function compressSvg(svg) {
  svg = optimizeSvg(svg);
  svg = minifyCssVars(svg);

  return svg;
}

function optimizeSvg(svg) {
  return optimize(svg, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: {
              preserve: ["enabled", "hover", "active", "disabled"],
            },
          },
        },
      },
    ],
  }).data;
}

function minifyCssVars(svg) {
  const map = {
    "--icons-01": "--a",
    "--icons-02": "--b",
    "--icons-03": "--c",
    "--icons-04": "--d",
    "--icons-05": "--e",
    "--icons-06": "--f",
    "--icons-07": "--g",
    "--icons-08": "--h",
    "--icons-09": "--i",
  };

  return svg.replace(REGEX_USED_VARS, (match) => {
    return map[match];
  });
}

function writeAllTextFile(filePath, data) {
  writeFile(filePath, data, "utf8", (err) => {
    if (err) {
      console.error("Error writing to output file:", err);
      return;
    }
  });
}
