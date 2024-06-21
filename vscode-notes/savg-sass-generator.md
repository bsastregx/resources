# svg-sass-generator

## run example

`npm run process assets dist`

- revisar por qué cuando se colorea el stroke, el fill queda negro. Para salir del paso
  estoy definiendo el fill transparent, si es que no tiene fill en su estado original.

- el argument para los color states en processor-svg debería llamarse STATES_PATH y no STATES_FILENAME, y debería ser la ruta completa, no relativa a la carpeta SOOURCE.

- crear un map a nivel global para los colores monochrome, del tipo "name" -> index. Para poder encontrar el color más rápidamente en "create-monochrome-svg.ts".

- refactorizar: tratar de hacer globales todas las variables que sean posibles, a fin de pasar menos argumentos a las funciones. Ej: log file.
