import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logotipo" alt="logotipo" />

      <div className="menu">
        <a href="#">Historico</a>
        <button>
          <img src={bag} />
          sacola
        </button>
      </div>
    </div>
  );
}

export default Navbar;
