import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <div className="navContainer">
        <Link style={{ textDecoration: "none" }} to="/">
          <h2 className="store">Tienda
            <span className="title"> Corazan</span>
          </h2>
        </Link>

        <div ref={navRef} className="containerLink">
          <Link to="/" className="navegacion" > Home</Link>
          <Link to="/category/coleccion" className="navegacion">Colecciones</Link>
          <Link to="/category/hombre" className="navegacion">Reloj De Hombres</Link>
          <Link to="/category/mujer" className="navegacion">Reloj De Mujeres</Link>
          <CartWidget className="carrito" />
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button>
          <FaBars className="nav-btn " onClick={showNavbar} />
        </button>
      </div>
    </>
  )
}

export default Navbar