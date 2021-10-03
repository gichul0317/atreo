import logo from '../Assets/Logo.png'
import '../styles/navbar.scss'

function Navbar() {
  return (
    <nav id="home">
      <div className="wrapper">
        <ul>
          <li><img src={logo} alt="Fit Eternally logo on navbar" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><button>Sign up</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;