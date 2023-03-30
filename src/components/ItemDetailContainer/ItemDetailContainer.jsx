import { getProductsById } from "../../asyncMock"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    useEffect(() =>{
        getProductsById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    
    
        }, [productId])

        if(loading) {
            return 
            <h3 className="font-bold text-xl mb-5"> Cargando..... calmao</h3>
        }


    return( 
        <div>
            <h1 className="font-bold text-xl mb-5" >Detalle del producto</h1>
            <div>
                <h2  className="font-bold text-xl mb-5">{product.name}</h2>
                <img src={product.img} alt={product.name} className="w-full"/>
                <h3 className="font-bold text-xl mb-5">Precio: ${product.price}</h3>
            
            </div>

            
        </div>

        
    )
   
}

export default ItemDetailContainer