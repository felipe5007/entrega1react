import { useState } from 'react'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  // El cart Widget esta dentro del Sidebar ultima lista, aun estoy repasando Tailwind y no se como dentro del nav desde APP
  return (
    <div className="flex">
      <SideBar/>
      <ItemListContainer greeting ="Este es mi espacio de trabajo de mi proyecto TRAKK" />
    </div>
  )
}

export default App
