import { useState } from "react"
import {restaurantList} from '../Constants'

const Body = () => {
  const [searchText, setSearchText] = useState(''); // to create local state variables and it returns variable and set method
  const [filteredRestaurants, setFilteredRestaurantList] = useState(restaurantList)

  function filterList(text, list) {
    return list.filter(item => item.name.toLowerCase().includes(text));
  }

  return (
    <>
    <div className="search-bar">
      <input type='text' value={searchText} onChange= {  // React uses 1 way binding, value from html should be set explicitly
        (e) => setSearchText(e.target.value)
      }/>
      <button className="search-btn" onClick={() => {
        newList = filterList(searchText, restaurantList);
        setFilteredRestaurantList(newList);
      }}>search</button>
      
    </div>
    <div className="restaurant-cards">
      {
        filteredRestaurants.map(res =>
          <RestaurantCard {...res} key={res.cloudinaryImageId} />
        )
      }
    </div>
    </>
    
  )
};

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

export default Body;