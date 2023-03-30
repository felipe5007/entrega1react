import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState([])

  const { categoryId } = useParams()
  console.log(categoryId)

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })

  }, [])
  
  if (loading)
 {
  return
  <h1>Cargando.... Calmate</h1>
 }


// Generico Card Product
return (
      
  <div>
    <h1>Hola estoy intentandolo</h1>

    <div>
      {products.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.name}</h2>
          <img src={prod.img} alt={prod.name} className="imgCard" />
          <button>Ver Detalles</button>
        </div>
      ))}
    </div>
  </div>

)
    
}

export default ItemListContainer;