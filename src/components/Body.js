import { useEffect, useState } from "react";
import Restaurant from "./Restaurant"

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div>
            <div className="upper-body">
                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = listOfRes.filter((res) => res.info.sla.deliveryTime < 30);
                        setfilteredList(filteredList);
                    }
                }>Fastest delivery Restaurant in your Area</button>
                <div>
                    <input type="text" value={searchText} onChange={ (e) => setsearchText(e.target.value)}/>
                    <button onClick={() => {
                        const searchedList = listOfRes.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setfilteredList(searchedList);
                    }} className="filter-btn">Search</button>

                </div>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <Restaurant key={restaurant.info.id} resData={{ restaurant }} />
                ))}
            </div>
        </div>
    );
}

export default Body;