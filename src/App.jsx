import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  // El cart Widget esta dentro del Sidebar ultima lista, aun estoy repasando Tailwind y no se como dentro del nav desde APP
  return (
        <div className="flex">
          <SideBar />  
          <ItemListContainer habla ="Este es mi proyecto"/>
          </div>
  );
}

export default App;