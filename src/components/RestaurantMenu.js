import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [menuList, setMenuList] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const {id} = useParams();
    console.log(id);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId="+id);
        const json = await data.json();
        setMenuList(json.data?.cards[2]?.card?.card?.info);
        console.log(json.data?.cards[2]?.card?.card?.info);

    };

    const {name, cuisines, costForTwoMessage } = menuList;
    // const menuFull = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <p>{costForTwoMessage}</p>
            
            <ul>
                <li>Menu1</li>
                <li>Menu1</li>
                <li>Menu1</li>
                <li>Menu1</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;