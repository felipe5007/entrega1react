const products = [
    {
      id: '1',
      category: 'Camisa',
      name: 'Camisa Roja',
      description: 'Camisa ligera de planchado, Manga larga de color rojo',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Croja.jpg'},

    {
      id: '2',
      category: 'Camisa',
      name: 'Camisa Celeste',
      description: 'Camisa ligera de planchado, Manga larga de color celeste',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Cceleste.jpg'
    },

    {
      id: '3',
      category: 'Camisa',
      name: 'Camisa Naranja',
      description: 'Camisa ligera de planchado, Manga larga de color naranja',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Cnaranja.jpg'
    },

    {
      id: '4', 
      category: 'Camisa',
      name: 'Camisa Blanca',
      description: 'Camisa ligera de planchado, Manga larga de color Blanco',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Cblanca.jpg'
    },
    {
      id: '5', 
      category: 'Camisa',
      name: 'Camisa Rosa',
      description: 'Camisa ligera de planchado, Manga larga de color rosa',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Crosa.jpg'
    },

    {
      id: '6',
      category: 'Camisa',
      name: 'Camisa Verde',
      description: 'Camisa ligera de planchado, Manga larga de color verde',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Cverde.jpg'
    },

    {
      id: '7', 
      category: 'Poleron',
      name: 'Poleron amarillo',
      description: 'Poleron Unisex fino Color amarillo',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Pamarilla.png'
    },

    {
      id: '8',
      category: 'Poleron',
      name: 'Poleron azul',
      description: 'Poleron Unisex fino Color azul',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Pazul.png'
    },

    {
      id: '9',
       category: 'Poleron',
       name: 'Poleron blanco',
       description: 'Poleron Unisex fino Color blanco',
       price: 1500,
       stock: 10,
       img: '../../src/assets/Productos/Pblanco.png'
      },

    {
      id: '10',
      category: 'Poleron',
      name: 'Poleron rojo',
      description: 'Poleron Unisex fino Color rojo',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Proja.png',
    },

    {
      id: '11',
      category: 'Poleron',
      name: 'Poleron verde',
      description: 'Poleron Unisex fino Color verde',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Pverde.png'
    }
  ]

  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
    }, 1000)
      })
    }


    export const getProductsByCategory = (categoryId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
      })
    }

    export const getProductsById = (productId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find(prod => prod.id === productId))
        }, 1000)
      })
    }