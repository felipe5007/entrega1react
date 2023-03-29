import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

useEffect(() =()
  .then(response => {
    setProducts(response)
  })
}, [])

return (
      
  <div>
    <h1>Saludo</h1>

    <div>
      {products.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.name}</h2>
          <img src={prod.img} alt={prod.name} />
          <button>Ver Detalles</button>
        </div>
      ))}
    </div>
  </div>

)
    
}

export default ItemListContainer;