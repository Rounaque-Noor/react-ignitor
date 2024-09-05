import { useEffect, useState } from "react";
import Restaurant from "./Restaurant"
import { RES_LIST } from "../utils/constant";
import useStatusOnline from "../utils/useStatusOnline";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_LIST);
        const json = await data.json();
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useStatusOnline();

    if(onlineStatus === false) {
        return <h1>You are offline! Please check your Internet connection</h1>
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