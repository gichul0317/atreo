import logo from '../Assets/Logo.png'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><img src={logo} alt="company logo on navbar" /></li>
        <li>Home</li>
        <li>About</li>
        <li>Process</li>
        <li>Shop</li>
        <li>Sign up</li>
      </ul>
    </nav>
  );
}

export default Navbar;