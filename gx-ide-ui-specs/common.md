# Common

## Reglas

- Toda propiedad que sea un callback, debe tener el sufijo `callback` luego del nombre. Ejemplo: selectEntityCallback.
- Los nombres de las funciones del tipo handler deben que nombrarse de la siguiente manera: `[funcionQueCumple]` handler. Ejemplo: `openObjectHandler`

## Types

#### `FormElementValidation` {#FormElementValidation}

```
type FormElementValidation = {
  key: string;
  message: string;
  hasError: boolean;
};
```

#### `FormSubmitResult` {#FormSubmitResult}

```console.log('',);
type FormSubmitResult = {
  success: boolean;
  fieldErrors: FormElementValidation[];
};
```

#### `ObjectState` {#ObjectState}

```
type ObjectState:  'inserted' | 'modified' | 'deleted' | 'conflicted';
```

#### `ContextMenuInfo` {#ContextMenuInfo}

```
type ContextMenuInfo = {
    selection:string[];
    clientX:number;
    clientY:number;
}
```

#### `PendingItemsCheckedState` {#PendingItemsCheckedState}

```
type PendingItemsCheckedState = {
    itemsChecked: string[]; //Ids internos de ítems que fueron  chequeados
    itemsUnchecked: string[]; //Ids internos de ítems que fueron de-chequeados
};
```

#### `PendingItemCheckedResult` {#PendingItemCheckedResult}

```
type PendingItemCheckedResult = {
    itemsToCheck: string[]; //Ids internos de ítems a marcar
    itemsToUncheck: string[]; //Ids internos de ítems a desmarcar
};
```

#### `EntityData` {#EntityData}

```
type EntityData = {
    id: string;
    name: string;
    iconSrc?: string;
    iconColor?: IconColor;
}
```

#### `FormElementValidation` {#FormElementValidation}

```
type FormElementValidation = {
    key: string;
    message: string;
    hasError: boolean;
};
```

#### `ConnectionResultData` {#ConnectionResultData}

```
type ConnectionResultData = {
    success: boolean;
    fieldErrors: FormElementValidation[]; //Arreglo con errores.
    Para cada error se especifica el campo en cuestión (donde el id
    es una key del tipo GXServerConnectionData) y el mensaje de error.
};
```

#### `ConnectionResultData` {#ConnectionResultData}

```
Type AuthenticationType = “genexus” | “local”
```
