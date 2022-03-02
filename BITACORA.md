# Solución Prueba tecnica Front Ecomsur 2021

  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción de la prueba](#descripción-de-la-prueba)
  - [Resolución de prueba](#resolucion-de-prueba)


## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`


## Descripción de la prueba.

Se requiere implementar un carrito de compras simple que traiga toda la info del API local, éste debe contar con las siguientes secciones:

- Una lista de ítems mostrando el catálogo de productos. (Product List Page)
- Página de producto mostrando detalle de producto. (Product Display Page)
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Cart Page)
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart) ![mini cart example](/minicart-example.png)

#### Las reglas del negocio son:

- Cada ítem del catálogo debe tener un action button con el texto `Add item to cart`.
- Si no hay stock el `action button` debe deshabilitarse
- Cada ítem en el carro debe tener un `action button` para remover el ítem del carro.
- Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

## Resolucion de la prueba

Día 1: 22/02
1. Maquete y agregue los estilos y diseños de las vistas  solicitadas `ProductDisplay` `ProductList` `Cart`. 
2. Implemente axios para la consulta de la data.
3. Renderice los productos.

Día 2: 01/03
1. Cree componente layout para poder renderizar segun lo seleccionado, y agregue un contexto parapoder disponer de los estados que necesitaba en otros componentes.
2. Le di logica al componente `DisplayProduct` que al selccionar el articulo, le presente una vista con mas detalle del producto.
3. Le di funcionalidad al component `Cart`.
4. Agregue favicon de la aplicación.

Realice un context porque me parecio la manera mas sencilla de disponer mis estados en mis distintos componentes.

Al igual que la realizacion del hook useData para hacer esa consulta de mi data  y reutilizar ese hook, el cual lo agregue a mi context y asi en donde lo necesitaba tomaba de mi context `usePageContext` lo que requeria.

Para realizar la consulta de la API implemente axios como asi lo requerian en la prueba.

Instale solo axios para su utilización.

## Problemas presentados:
1. Al inicio de la prueba quise implementar sass para hacer mis estilos pero me generaba error con weppack e intente solucionarlo pero no lo logre rapido y decidi quitarlo y solo usar css puro.
2. Como vi dos packaje.json y package-lock.json uno dentro front y otro fuera crei habia tratado de instalar una dependencia donde no era y los borre y no pude levantar mas la app, por mas que corri de nuevo npm install. Tuve que clonar de nuevo el proyecto







