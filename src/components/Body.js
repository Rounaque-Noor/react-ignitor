import { useEffect, useState } from "react";
import Restaurant from "./Restaurant"

const resList =
{
    resName: "KFC",
    cuisine: "Burger, Fast Food",
    quantity: "400 for two",
    deliveryTime: 38
}

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div>
            <div>
                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = listOfRes.filter((res) => res.info.sla.deliveryTime < 30);
                        setListOfRes(filteredList);
                    }
                }>Fastest delivery Restaurant in your Area</button>
            </div>
            <div className="res-container">
                {listOfRes.map((restaurant) => (
                    <Restaurant key={restaurant.info.id} resData={{ restaurant }} />
                ))}
            </div>
        </div>
    );
}

export default Body;