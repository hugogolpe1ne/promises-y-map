import React from "react"
function Item ({id, name, price, image}) {
    
    return (
        <div key={id}>
            <h1>{name}</h1>
            <footer>{price}</footer>
            <img src={image} alt={name} />
        </div>
    )
}
export default Item