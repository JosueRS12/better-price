# better-price
Aplicación web que permite consultar y comparar el precio de distintos proveedores en el mercado, mediante el uso de web scrapping.

La aplicación constra de tres componentes fundamentales:
  - modelo.
  - presentación.
  - servicio.

## Modelo
En este componente se desarrolla una `api rest` con la que se pueden ejecutar algunos métodos `HTTP` para crear, modificar y actualizar usuarios en el aplicativo. La finalidad de esta api  es proveer un servicio de gestión de usuarios (incio de sesión, registro de usuario y autenticación), que permite vincular productos seleccionados como favoritos, para ser listados previamente del lado del cliente.

Las herramientas que se usan para crear dicho servicio son:
  - NodeJs.
  - Express.
  - PostgreSql
  - JWT (JSON WEB TOKENS).

## Presentación
Este es el componente encargado del frontend de la página web. Allí se desarrollan las diferentes vistas y páginas que hay, entre ellas:
  - Productos por categoría.
  - Productos Favoritos.
  - Registro de usuario.
  - Sección de categorias.
  - Sección de marcas.

Hecho con ReactJS y hooks.

## Servicio
`api rest` que se encarga de proporcionar los productos las marcas definidas, haciendo uso de `web scraping`. Este servicio se realiza con `FLASK` y `MONGODB`
