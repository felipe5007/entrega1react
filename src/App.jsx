import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // El cart Widget esta dentro del Sidebar ultima lista, aun estoy repasando Tailwind y no se como dentro del nav desde APP
  return (
        <div className="flex-row">
          <BrowserRouter>
          <SideBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          </Routes>
          </BrowserRouter>
          </div>
  );
}

export default App;