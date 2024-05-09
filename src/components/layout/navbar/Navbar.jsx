import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <Link to="/">
          <span>Corazan</span>
        </Link>
        <ul className="categories">

          <Link to="/category/coleccion">Colecciones</Link>
          <Link to="/category/hombre">Relojes De Hombres</Link>
          <Link to="/category/mujer">Relojes De Mujeres</Link>

        </ul>
        <CartWidget className="carrito" />
      </div>
    </>
  )
}

export default Navbar