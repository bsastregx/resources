# vscode

## ver markdown

`cmd + shift + v` o `ctrl + shift + v`
(hay que estar editando el archivo)

## formatear comentarios

file > preferences > settings > word wrap: on

## bookmark next

ctrl + alt + L

## ir a keyboard shorcuts

ctrl k + ctrl s

## agregar shortcut para console.log

1. ir a keyboard shortcuts
2. ícono de "open keyboard shortcuts (JSON)
3. pegar:
   {
   "key": "ctrl+shift+l",
   "command": "editor.action.insertSnippet",
   "when": "editorTextFocus",
   "args": {
   "snippet": "console.log('${TM_SELECTED_TEXT}$1')$2;"
   }
   }
