const products = [
    {
      id: '1',
      category: 'camisa',
      name: 'Camisa Roja',
      description: 'Camisa ligera de planchado, Manga larga de color rojo',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Croja.jpg',
    },

    {
      id: '2',
      category: 'camisa',
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
      category: 'camisa',
      name: 'Camisa Blanca',
      description: 'Camisa ligera de planchado, Manga larga de color Blanco',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Cblanca.jpg'
    },
    {
      id: '5', 
      category: 'camisa',
      name: 'Camisa Rosa',
      description: 'Camisa ligera de planchado, Manga larga de color rosa',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Crosa.jpg'
    },

    {
      id: '6',
      category: 'camisa',
      name: 'Camisa Verde',
      description: 'Camisa ligera de planchado, Manga larga de color verde',
      price: 1000,
      stock: 10,
      img: '../../src/assets/Productos/Cverde.jpg'
    },

    {
      id: '7', 
      category: 'poleron',
      name: 'Poleron amarillo',
      description: 'Poleron Unisex fino Color amarillo',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Pamarilla.png'
    },

    {
      id: '8',
      category: 'poleron',
      name: 'Poleron azul',
      description: 'Poleron Unisex fino Color azul',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Pazul.png'
    },

    {
      id: '9',
       category: 'poleron',
       name: 'Poleron blanco',
       description: 'Poleron Unisex fino Color blanco',
       price: 1500,
       stock: 10,
       img: '../../src/assets/Productos/Pblanco.png'
      },

    {
      id: '10',
      category: 'poleron',
      name: 'Poleron rojo',
      description: 'Poleron Unisex fino Color rojo',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Proja.png',
    },

    {
      id: '11',
      category: 'poleron',
      name: 'Poleron verde',
      description: 'Poleron Unisex fino Color verde',
      price: 1500,
      stock: 10,
      img: '../../src/assets/Productos/Pverde.png'
    }
  ]

  const categories = [
    {
      id: '1',
      description: 'Camisas',
      slug: 'camisa'
    },
    {
      id: '2',
      description: 'Polerones',
      slug: 'poleron'
    }

  ]

  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categories)
      }, 500) 
      })
    }
  
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