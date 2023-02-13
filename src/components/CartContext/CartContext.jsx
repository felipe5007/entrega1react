import { createContext, useState, useContext  } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList ] = useState([])

    const agregarCarrito = (newProducto) => {
        const productIndex = cartList.findIndex(producto => producto.id === newProducto.id);
        if (productIndex === -1) {
          setCartList([...cartList, newProducto]);
        } else {
          const updatedCartList = [...cartList];
          updatedCartList[productIndex].cantidad += newProducto.cantidad;
          setCartList(updatedCartList);
        }
      };
    const vaciarCarrito = () => setCartList ([ ])

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    ) }