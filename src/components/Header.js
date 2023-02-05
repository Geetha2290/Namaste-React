import { useState } from "react";
import { Link } from "react-router-dom";
import { HOME_LOGO_URL } from "../Constants"; 

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
  <div className="header">
    <img src= {HOME_LOGO_URL} />

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
      <li><Link to="/about">About</Link></li>
      <li>Cart</li>
    </ul>

    { isLoggedIn ? (<button onClick={() => setLoggedIn(false)}>Logout</button>) : (<button onClick={() => setLoggedIn(true)}>Login</button>)}
    
  </div>
  )
}

export default Header;