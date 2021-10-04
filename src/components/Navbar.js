import logo from '../Assets/Logo.png'
import '../styles/navbar.scss'

function Navbar() {
  return (
    <nav id="home">
      <div className="wrapper">
<<<<<<< HEAD
        <ul>
          <li><img src={logo} alt="Fit Eternally logo on navbar" /></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><button>Sign up</button></li>
=======
        <ul className="nav-container">
          <li className="logo-container">
            <img src={logo} alt="Fit Eternally logo on navbar" />
          </li>
          <ul className="link-container">
            <li><a href="#home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="process">Process</a></li>
            <li><a href="shop">Shop</a></li>
            <li><button>Sign up</button></li>
          </ul>
>>>>>>> 782850e95efa78989cccaf9155ebbc9c3db74480
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;