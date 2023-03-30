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
  

return (
      
  <div>
    <h1>Hola estoy intentandolo</h1>

    <div>
      {products.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.name}</h2>
          <img src={prod.img} alt={prod.name} Class="imgCard" />
          <button>Ver Detalles</button>
        </div>
      ))}
    </div>
  </div>

)
    
}

export default ItemListContainer;