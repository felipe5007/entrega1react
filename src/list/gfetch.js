const productos = [
    {id: '1', categoria: 'Camisa', nombre: 'Camisa Roja', detalle: 'Camisa ligera de planchado, Manga larga de color rojo', precio: 1000, stock: 10, imagen: '../../src/assets/Productos/Croja.jpg'},
    {id: '2', categoria: 'Camisa', nombre: 'Camisa Celeste', detalle: 'Camisa ligera de planchado, Manga larga de color celeste', precio: 1000, stock: 10, imagen: '../../src/assets/Productos/Cceleste.jpg'},
    {id: '3', categoria: 'Camisa', nombre: 'Camisa Naranja', detalle: 'Camisa ligera de planchado, Manga larga de color naranja', precio: 1000, stock: 10, imagen: '../../src/assets/Productos/Cnaranja.jpg'},
    {id: '4', categoria: 'Camisa', nombre: 'Camisa Blanca', detalle: 'Camisa ligera de planchado, Manga larga de color Blanco', precio: 1000, stock: 10, imagen: '../../src/assets/Productos/Cblanca.jpg'},
    {id: '5', categoria: 'Camisa', nombre: 'Camisa Rosa', detalle: 'Camisa ligera de planchado, Manga larga de color rosa', precio: 1000, stock: 10, imagen: '../../src/assets/Productos/Crosa.jpg'},
    {id: '6', categoria: 'Camisa', nombre: 'Camisa Verde', detalle: 'Camisa ligera de planchado, Manga larga de color verde', precio: 1000, stock: 10, imagen: '../../src/assets/Productos/Cverde.jpg'},
    {id: '7', categoria: 'Poleron', nombre: 'Poleron amarillo', detalle: 'Poleron Unisex fino Color amarillo', precio: 1500, stock: 10, imagen: '../../src/assets/Productos/Pamarilla.png'},
    {id: '8', categoria: 'Poleron', nombre: 'Poleron azul', detalle: 'Poleron Unisex fino Color azul', precio: 1500, stock: 10, imagen: '../../src/assets/Productos/Pazul.png'},
    {id: '9', categoria: 'Poleron', nombre: 'Poleron blanco', detalle: 'Poleron Unisex fino Color blanco', precio: 1500, stock: 10, imagen: '../../src/assets/Productos/Pblanco.png'},
    {id: '10', categoria: 'Poleron', nombre: 'Poleron rojo', detalle: 'Poleron Unisex fino Color rojo', precio: 1500, stock: 10, imagen: '../../src/assets/Productos/Proja.png'},
    {id: '11', categoria: 'Poleron', nombre: 'Poleron verde', detalle: 'Poleron Unisex fino Color verde', precio: 1500, stock: 10, imagen: '../../src/assets/Productos/Pverde.png'}
  ]

  
  
  export const gFetch = () => {
    return new Promise (( res, rej ) => 
        setTimeout(() =>{ 
          res( productos ) 
        }, 1000)
    )}