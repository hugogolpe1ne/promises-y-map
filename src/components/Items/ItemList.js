import React from "react";
import Item from "./Item";

function ItemList({Productos}) {
    return (
        Productos.map(p =>
        <Item
        id={p.id}
        name={p.name}
        image={p.image}
        price={p.price}
        key={p.id}
        />)
    )
}

export default ItemList