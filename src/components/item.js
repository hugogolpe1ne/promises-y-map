import React from "react"
function Item ({id, name, image}) {
    
    return Item({id, name, image}) (
        <div key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name} />
        </div>
    )
}
    export default Item