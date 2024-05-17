# design-systems

# To Do

## tree-view

- cambiar las rutas de las background images en part(action)

## button

- avisar que la font family la heredo
- no vi definido el letter-spacing en figma
- todos deben llevar borde, para igualar la altura.
- porque le puse border transparente al button base, quité esto:
  // This is necessary to avoid CLS issues when using the segmented control,
  // due to the secondary button style has borders but the primary style doesn't
  border: var(--border-radius-un-border\_\_radius--xs) solid transparent;
- quité el border radius del primary, porque es el mismo en todos tipos de botones. por lo que lo puse en base.
- por alguna razon, la regla de box sizing no parece estar aplicando. el valor computado es content-box.
- preg. /css/styles.css no debería estar dentro de assets?

## svg-sass-generator

ajustar para que la source folder pueda estar en n niveles de profundidad

## pregutas para Nico

- por qué label y form-text están en el mismo form-control.scss ? Pueod tenerlos por separado ?
- $icons-assets
