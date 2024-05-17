# npm

# ----------------------

## link globally

# ----------------------

# Navigate to the directory of the local package

cd /path/to/your/local/package

# Create a global symlink for the package

npm link

# Navigate to the project directory where you want to use the local package

cd /path/to/your/project

# Link the local package to the project

npm link <package-name>

# ----------------------

## unlink globally

# ----------------------

npm unlink -g <package-name>

# ----------------------

## see list of globally installed

# ----------------------

npm ls -g --depth 0
