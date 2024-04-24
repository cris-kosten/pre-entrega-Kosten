import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navContainer">
        <Link to="/">
          VW <span>Corazan</span>
        </Link>
        <ul className="categories">
          <Link to="/">Modelos</Link>
          <Link to="/category/vehiculos">Vehiculos</Link>
          <Link to="/category/camionetas">Camioneta</Link>
          <Link to="/category/camiones">Camiones</Link>

        </ul>
        <CartWidget className="carrito" />
      </div>
    </>
  )
}

export default Navbar