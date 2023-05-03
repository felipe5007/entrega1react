import { FaShoppingCart } from "react-icons/fa";
import React from "react";

const Cartwidget = ({ cartCounter }) => {
  return (
    <>
      <button className="">
        <FaShoppingCart/>
        {cartCounter}
      </button>
    </>
  );
};
export default Cartwidget;