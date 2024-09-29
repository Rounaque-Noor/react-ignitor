import { useEffect, useState } from "react";
import Restaurant, { ComponentPromoted } from "./Restaurant"
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

    const RestaurantPromoted = ComponentPromoted(Restaurant);

    if(onlineStatus === false) {
        return <h1>You are offline! Please check your Internet connection</h1>
    }

    return listOfRes.length === 0 ? null : (
        <div>
            <div className="flex m-4">
                <div className="flex items-center">
                    <input data-testid="searchInput" type="text" className="border border-solid border-black rounded-sm" value={searchText} onChange={(e) => setsearchText(e.target.value)} />
                    <button onClick={() => {
                        const searchedList = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                        setfilteredList(searchedList);
                    }} className="px-3 py-1 bg-green-500 m-4 rounded-lg">Search</button>

                </div>
                <div>
                    <button className="px-3 py-1 m-4 bg-slate-400 rounded-sm" onClick={
                        () => {
                            const filteredList = listOfRes.filter((res) => res.info.sla.deliveryTime < 30);
                            setfilteredList(filteredList);
                        }
                    }>Fastest Restaurant in your Area</button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {filteredList.map((restaurant) => (
                    restaurant.info.promoted ? (
                        <RestaurantPromoted resData={{ restaurant }} />
                    ) : (
                    <Restaurant key={restaurant.info.id} resData={{ restaurant }} />
                    )
                ))}
            </div>
        </div>
    );
}

export default Body;