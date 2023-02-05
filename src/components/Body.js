import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../Constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState(''); // to create local state variables and it returns variable and set method
  const [allRestaurants, setAllRestaurants] =  useState([]);
  const [filteredRestaurants, setFilteredRestaurantList] = useState([]);
 
  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      const list = json?.data?.cards[2]?.data?.data?.cards;
      setAllRestaurants(list);
      setFilteredRestaurantList(list);
    }
    catch(e) {
      console.log('An exception occured' + e)
    }
  }

  function filterList(text, list) {
    return list.filter(item => item.data?.name?.toLowerCase().includes(text));
  }

  return (
    <div className="body-container">
      <div className="search-bar">
        <input type='text' value={searchText} onChange= {  // React uses 1 way binding, value from html should be set explicitly
          (e) => {
            setSearchText(e.target.value);}
        }/>
        <button className="search-btn" onClick={() => {
          newList = filterList(searchText, allRestaurants);
          setFilteredRestaurantList(newList);
        }}>search</button>
        
      </div>
      <div className="restaurant-cards">
        {
          filteredRestaurants.length > 0 ?
          filteredRestaurants.map(res => 
            <Link to={'/restaurantDetails/' + res.data?.id} key={res.data?.cloudinaryImageId}>
              <RestaurantCard {...res.data} />
            </Link>
          ) : <Shimmer/>
        }
      </div>
    </div>
    
  )
};

const RestaurantCard = ({name, cuisines, area, cloudinaryImageId}) => {
  return (
    <div className="restaurant-card">
      <img src={IMAGE_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.join(', ')}</p>
      <p>{area}</p>
    </div >
  )
}

export default Body;