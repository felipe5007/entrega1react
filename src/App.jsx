import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {

  return (
        <div className="flex-column">
          <BrowserRouter>
          <SideBar/>
          <CartProvider>
          <NavBar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path="/CartContainer" element={<CartContainer/>}/>
          </Routes>
          </CartProvider>
          </BrowserRouter>
          </div>
  );
}

export default App;