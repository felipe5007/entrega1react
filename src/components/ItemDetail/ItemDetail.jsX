import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"


const ItemDetail = ({name, img, price, stock}) => {

    const [gotoCart, setGotoCart] = useState(false); 
    const {addProduct} = useCartContext();

    const HandleOnAdd = (quantity) => {
        console.log(`Compraste ${quantity} ${name}`);
        setGotoCart(true);
        const data = {
            name,
            img,
            price,
            stock,
        }
        addProduct(data, quantity);
    }

    return(
    <div>
                <h2  className="font-bold text-xl mb-5">{name}</h2>
                <img src={img} alt={name} className="w-full"/>
                <h3 className="font-bold text-xl mb-5">Precio: ${price}</h3>  
                {
                    gotoCart
                    ? <Link to={'/Cart'}>Terminar Compra</Link>
                    : <ItemCount stock={stock} initial={1} onAdd={HandleOnAdd}/>
                }
            </div>
    )
}
 
export default ItemDetail 