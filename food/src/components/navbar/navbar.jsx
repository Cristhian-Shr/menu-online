import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logotipo" alt="logotipo" />

      <div className="menu">
        <a href="#">Historico</a>
        <button className="btn btn-red">
          <img src={bag} className="icon" />
          sacola
        </button>
      </div>
    </div>
  );
}

export default Navbar;
