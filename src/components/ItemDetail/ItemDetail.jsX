import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, price, stock}) => {

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
    }

    return(
    <div>
                <h2  className="font-bold text-xl mb-5">{name}</h2>
                <img src={img} alt={name} className="w-full"/>
                <h3 className="font-bold text-xl mb-5">Precio: ${price}</h3>
                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
            </div>
    )
}

export default ItemDetail