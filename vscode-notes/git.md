# git

- limpiar caché si .gitignore no ignora
  git rm -r --cached <folder>

## ignorar carpetas o archivos sin unsar el gitignore

Agregar la carpeta, y luego decirle a git que la carpeta no tiene cambios:

1. git add <path_to_your_personal_folder>
2. git update-index --assume-unchanged <path_to_your_personal_folder>
