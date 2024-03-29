import { getCategories } from "../../../asyncMock"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartContainer from "../CartContainer/CartContainer"
import Cartwidget from "../CartWidget/CartWidget"

const NavBar = () => {

    const [categories, setCategories] = useState([])


    useEffect(() => {
        getCategories()
        .then(response => {
            setCategories(response)
        })
    }
        )


return (
    <nav className="flex justify-around align-middle">
        <Link to='/' className="font-bold text-xl mb-5" >Tienda Trakk</Link>
        <div>

            {
                categories.map(cat => {
                    return (
                        <Link key={cat.id} to={`/category/${cat.slug}`} 
                        >{cat.description}</Link>
                    )
                })
            }
            <Link to="/CartContainer"><Cartwidget/></Link>

        </div>
    </nav> 
)}

export default NavBar