import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {id} = useParams();
    console.log(id);

    const resInfo = useRestaurantMenu(id);

    if (resInfo === null)
        return null; // Given error before destructuring, data was not fetched NULL error
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const menuFull = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <p>{costForTwoMessage}</p>
            {menuFull?.map( menu => (

                <ul key={menu.card.info.id}>
                    <li>{menu.card.info.name} - {menu.card.info.price/100}</li>
                </ul>
            ))}
            
        </div>
    )
}

export default RestaurantMenu;