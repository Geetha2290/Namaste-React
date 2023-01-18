import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('container'));

const Header = () => (
  <div className="header">
    <img src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" />
    <ul>
      <li>Home</li>
      <li>Contact us</li>
      <li>About</li>
      <li>Cart</li>
    </ul>
  </div>
);

const restaurantList = [{
  name: 'Burger King',
  area: 'Kormangala',
  totalRatings: '1000',
  cuisines: ['Burgers', 'American'],
  cloudinaryImageId: 'jpohkfkofao0hxez7vdh',
},
{
  name: 'IFC',
  area: 'Kormangala',
  totalRatings: '1000',
  cuisines: ['Burgers'],
  cloudinaryImageId: 't34dyumfv7orfffvqz5x',
}];

const RestaurantCard = ({name, cuisines, area, cloudinaryImageId}) => {
  return (
    < div className="restaurant-card" >
      <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <p>{area}</p>
    </div >
  )
}

const RestaurantCards = () => (
  <div className="restaurant-cards">
    {
      restaurantList.map(res =>
        <RestaurantCard {...res} key={res.cloudinaryImageId} />
      )
    }
  </div>
)

const Body = () => (
  <RestaurantCards />
);

const Footer = () => (
  <h3>footer</h3>
)
const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer>hello world</Footer>
  </>

)


root.render(<AppLayout />)