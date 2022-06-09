import ItemCount from "./ItemCount"

const itemListContainer = (props) => {
    console.log(props.greating)
    return (
        <>
            <h1>{props.greating}</h1>
            <ItemCount/>
        </>
    )
}

export default itemListContainer