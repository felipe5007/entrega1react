import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/NabBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
        <div className="flex-column">
          <BrowserRouter>
          <SideBar/>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
          </BrowserRouter>
          </div>
  );
}

export default App;