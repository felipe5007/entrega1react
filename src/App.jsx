import "./App.css";
import SideBar from "./components/sidebar/SideBar";
function App() {
  // El cart Widget esta dentro del Sidebar ultima lista, aun estoy repasando Tailwind y no se como dentro del nav desde APP
  return (
        <div className="flex">
          <SideBar />
          </div>
  );
}

export default App;