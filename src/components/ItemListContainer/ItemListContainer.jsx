import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams, Link } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState([])

  const { categoryId } = useParams()
  console.log(categoryId)

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
    setLoading(true)
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

  }, [categoryId])
  
  if(loading) { 
    return <h1 className="font-bold text-xl mb-5">Cargando.... Calmate</h1> 
}


// Generico Card Product
return (
       
  <div >
    <h1 className="font-bold text-xl mb-2"> Listado de Productos</h1>
    <div>
      {products.map((prod) => (
        <div key={prod.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <h2 className="font-bold text-xl mb-2">{prod.name}</h2>
          <img src={prod.img} alt={prod.name} className="w-full" />
          <h3 className="font-bold text-xl mb-2">Precio: ${prod.price}</h3>
          <Link to={`/item/${prod.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver Detalles</Link>

        </div>
      ))}
    </div>
  </div>

)
    
}

export default ItemListContainer;