# git

- limpiar caché si .gitignore no ignora
  git rm -r --cached <folder>

## ignorar carpetas o archivos sin unsar el gitignore

Agregar la carpeta, y luego decirle a git que la carpeta no tiene cambios:

1. git add <path_to_your_personal_folder>
2. git update-index --assume-unchanged <path_to_your_personal_folder>

## naming de branches

- Feature Branches: `update/short-description`
- Feature Branches: `feature/short-description`
- Bug Fix Branches: `bugfix/short-description`
- Hotfix Branches (urgent fixes): `hotfix/short-description`
- Release Branches: `release/version-number`
- Experimental Branches: `experiment/short-description`

---

- Package on a monorepo: `package/bugfix/short-description`
