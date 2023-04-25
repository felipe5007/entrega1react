import { FaShoppingCart } from "react-icons/fa";

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