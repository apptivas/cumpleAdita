# Decoraciones en CSS puro

Este paquete contiene 11 dibujos recreados íntegramente con CSS.

- No utiliza PNG ni JPG.
- No utiliza SVG.
- No utiliza Base64.
- No utiliza `background-image: url(...)`.
- Las figuras se construyen con gradientes, bordes, `clip-path`, sombras y elementos HTML vacíos.

## Uso

1. Enlaza el CSS que necesites:

```html
<link rel="stylesheet" href="03_corazon_brillante.css">
```

2. Copia el fragmento HTML correspondiente desde `fragmentos.html` o desde `vista_previa.html`.

3. Ajusta el tamaño mediante la variable `--tamano`:

```html
<div class="css-corazon-brillante" style="--tamano: 140px">
  <i class="borde"></i>
  <i class="corazon"></i>
  <i class="brillo"></i>
</div>
```

Los dibujos son escalables y no requieren ningún archivo gráfico externo.
