import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const CartContainer = () => {
  const { cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
  return (
  <>

  <p>No hay elementos en el carrito</p>
  <Link to='/'>Hacer compras</Link>
    </>
  )
}
return (
  <>
  {
    cart.map(products => <ItemCart key={products.id} products={products}/>)
  }
  </>
)
}

export default CartContainer

