import React, { useState , useEffect } from "react"
import ItemCount from "./ItemCount"
import customFetch from "./customFetch"
import ItemList from "./ItemList"
import Productos from "./Productos" 

const ItemListContainer = (props) => {
    console.log(props.greating)
    const onAdd = () => {}

    const [items, setItems] = useState([])
        useEffect(() => {
            customFetch(3000,Productos)
            .then(resultado => setItems(resultado))
            }, [items])

            console.log(items)
    

    return (
        <div>
            <h1>{props.greating}</h1>
            <ItemList Productos={items}/>
            <ItemCount Stock={6} onAdd={onAdd} Initial={1}/>
        </div>
    )
}

export default ItemListContainer