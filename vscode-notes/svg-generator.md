# svg-sass-generator

## run example

`npm run process assets dist`

- revisar por qué cuando se colorea el stroke, el fill queda negro. Para salir del paso
  estoy definiendo el fill transparent, si es que no tiene fill en su estado original.

- el argument para los color states en processor-svg debería llamarse STATES_PATH y no STATES_FILENAME, y debería ser la ruta completa, no relativa a la carpeta SOOURCE.

- crear un map a nivel global para los colores monochrome, del tipo "name" -> index. Para poder encontrar el color más rápidamente en "create-monochrome-svg.ts".

- refactorizar: tratar de hacer globales todas las variables que sean posibles, a fin de pasar menos argumentos a las funciones. Ej: log file.

- quitar los "shouldWriteToLog", que se imprima siempre el LOG

- ver si es posible quitar las extensiones de los imports /utils.js -> /utils

- se puede disponibilizar globalmente variables que uso en varios archivos? e.: src_path, output_path, etc..

- obtener el nombre del archivo usando : path.basename('C:\\temp\\myfile.html');

- soportar iconos que están directamente dentro de la carpeta source

- en el showcase, los titulos, catgegorias, etc, deberia ser totalmente dinamico para light y dark. Si no hay light no debería aparecer nada light, ni titulos, etc... ahora esta un poco fixed.

- Las listas del sidebar en el showcase, se despliegan porque la lista interna de una categoría es hermana. Si no es la nexSiblingElement deja de funcionar. Eso hay que arreglarlo.

=============================================================

COMMITS:

create-monochrome-svg.ts

- Update 'imports'
- Rename 'monochromeStatesObjs' to 'monochromeColors'
- Rename 'monochromeIconsArray' to 'monochromeIconsCategories'
- Rename 'svgCheerio'
