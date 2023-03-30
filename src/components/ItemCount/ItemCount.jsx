import { useState } from "react"


const ItemCount = ({stock, initial}) => {
    const [count,setCount] = useState(initial)


    const increment = () => {
        if (count < stock) setCount(prev => prev + 1)
    }

    const decrement = () => {
        if (count > 1) setCount(prev => prev - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
            <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            <button onClick={() => onAdd(count)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount