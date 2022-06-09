import Cart from "./cartWidget"
import Header from "./itemListContainer"


const Nav = ({NavInFooter,NavInHeader}) => {
    if (NavInHeader) {
        return (
            <>
            <Header greating ="bienvenido a mi tienda"/>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            </>
        )
    }  if (NavInFooter) {
        return (
            <>
            <h3>
            <a href="#">Facebok</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            </h3>
            </> 
            )
    }  else {
        return (
            <>
            <h2>Lista de Productos</h2>
            <a href="#">comprar</a>
            <Cart />
            </>
        )
    }
}

export default Nav