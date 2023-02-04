import { useState } from "react";
import { HOME_LOGO_URL } from "../Constants"; 

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
  <div className="header">
    <img src= {HOME_LOGO_URL} />

    { isLoggedIn ? (<button onClick={() => setLoggedIn(false)}>Logout</button>) : (<button onClick={() => setLoggedIn(true)}>Login</button>)}
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