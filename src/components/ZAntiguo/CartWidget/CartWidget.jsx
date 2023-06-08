import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { useCartContext } from "../../context/CartContext";

const Cartwidget = ({ cartCounter }) => {
  const {totalProducts} = useCartContext(); 


  return (
    <>
        <FaShoppingCart/>
        <span>{totalProducts() || ''}</span>
        {cartCounter}
    </>
  );
};
export default Cartwidget;