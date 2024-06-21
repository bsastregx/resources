# vscode

## ver markdown

`cmd + shift + v` o `ctrl + shift + v`
(hay que estar editando el archivo)

## formatear comentarios

file > preferences > settings > word wrap: on

## bookmark

next: ctrl + alt + L
mark: ctrl + alt + ñ

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

## markdown extension

cmd-k v or ctrl-k v Open preview to the Side
cmd-shift-v or ctrl-shift-v Open preview
ctrl-shift-s Sync preview / Sync source
shift-enter Run Code Chunk
ctrl-shift-enter Run all Code Chunks
cmd-= or cmd-shift-= Preview zoom in
cmd-- or cmd-shift-\_ Preview zoom out
cmd-0 Preview reset zoom
esc Toggle sidebar TOC
