import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';
import React from 'react';


const ItemCart = ({ products }) => {

    const {removeProduct} = useCartContext();
    return(
        <div className='itemCart'>
            <img src="{products.img}" alt="{products.name}"/>
            <div>
                <p>Titulo: {products.name}</p>
                <p>Cantidad: {products.quantity}</p>
                <p>Precio: {products.price}</p>
                <p>Subtotal: ${products.quantity * products.price} </p>
                <button onClick={() => removeProduct(products.id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default ItemCart;