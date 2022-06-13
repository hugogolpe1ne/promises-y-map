import ItemCount from "./ItemCount"

const itemListContainer = (props) => {
    console.log(props.greating)
    const onAdd = () => {}

    return (
        <div>
            <h1>{props.greating}</h1>
            <ItemCount Stock={6} onAdd={onAdd} Initial={1}/>
        </div>
    )
}

export default itemListContainer