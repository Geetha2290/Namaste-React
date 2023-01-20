import { HOME_LOGO_URL } from "../Constants"; 

const Header = () => {
  return (
  <div className="header">
    <img src= {HOME_LOGO_URL} />
    <ul>
      <li>Home</li>
      <li>Contact us</li>
      <li>About</li>
      <li>Cart</li>
    </ul>
  </div>
  )
}

export default Header;