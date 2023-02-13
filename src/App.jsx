import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContext from "./components/CartContext/CartContext";

function App() {
  const [count, setCount] = useState(0);

  // El cart Widget esta dentro del Sidebar ultima lista, aun estoy repasando Tailwind y no se como dentro del nav desde APP
  return (
    <CartContext>
      <BrowserRouter>
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
