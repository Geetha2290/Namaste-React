import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {IMAGE_URL} from '../Constants';
import { RESTAURANT_DETAIL_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const {id} = useParams();
  const [restaurant, setRestaurant] = useState(null);
  console.log('restaurant', restaurant)
  useEffect(() => {
    console.log('useEfect')
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(RESTAURANT_DETAIL_URL+id);
    const restaurantDetails = await data.json();
    setRestaurant(restaurantDetails?.data)
  }

  return (
    <>
     {
      restaurant===null ? <Shimmer/> :
      <div className="restaurant-details">
        <div className="restaurant-info">
          <h1>{restaurant.name}</h1>
          <img className='restaurant-img' src={IMAGE_URL+restaurant?.cloudinaryImageId}/>
          <h3>Address: </h3>
          <div>{restaurant.area}, {restaurant.areaSlug}</div>
          <div>{restaurant.city}, {restaurant.areaPostalCode}</div>
          <h3>Cost: </h3>{restaurant.costForTwoMsg}
          <h3>Cuisines: </h3>{restaurant.cuisines.join(', ')}
        </div>
        <div className="restaurant-menu">
          <table>
            {Object.values(restaurant.menu?.items).map(item => <tr><td>{item.name}</td> <td>€{(item.defaultPrice ?? item.price)/1000}</td></tr>)}
          </table>
        </div>
        
      </div>
      
     
    }
    </>
  )
}

export default RestaurantDetails;