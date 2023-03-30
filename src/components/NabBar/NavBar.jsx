import { getCategories } from "../../asyncMock"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
                        <Link key={cat.id} to={`/category/${cat.slug}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{cat.description}</Link>
                    )
                })
            }
        </div>
    </nav> 
)}

export default NavBar