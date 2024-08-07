import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LIST } from "../utils/constant";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menuList, setMenuList] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const {id} = useParams();
    console.log(id);

    const fetchData = async () => {
        const data = await fetch(MENU_LIST+id);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data?.cards[2]?.card?.card?.info);
        setMenuList(json.data);

    };

    if (resInfo === null || menuList === null)
        return null; // Given error before destructuring, data was not fetched NULL error
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const menuFull = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
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