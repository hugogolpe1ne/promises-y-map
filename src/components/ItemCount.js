import {useState} from "react"

const ItemCount = ({Stock=(6),Initial=(1),onAdd=()=>{}}) => {

    const [contador, setContador] = useState(Initial)
    console.log(contador)

    const aumentarContador = () => {
        console.log("aumentarContador")
        if (contador < Stock) {
            setContador(contador +1)
        }
    }
    const disminuirContador = () => {
        console.log("disminuirContador")
        if (contador >0){
            setContador(contador - 1)
        }
    }

    return (
        <>
            <p>El contador va : {contador}</p>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={disminuirContador}>disminuir</button>
            <button onAdd>confirmar</button>
        </>
    )
}

export default ItemCount