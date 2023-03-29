import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

useEffect(() => {
  getProducts()
  .then(response => {
    setProducts(response)
  })
}, [])

return <h1>Cargando......</h1>

    return (
      <div> 
        <h1>saludo</h1>
        <div>
        {
        products.map(prod => {
            return (
              <div  key={prod.id} >
              <h2>{prod.name}</h2>
              <img src={prod.img} alt={prod.name} {Style={{width:100}}/>
              <button>Ver Detalles</button>

              </div>
            )
          }
        }
        </div>
    
    )
}

export default ItemListContainer;