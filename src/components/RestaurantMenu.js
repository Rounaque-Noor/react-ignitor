import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryMenuList from "./CategoryMenuList";
import { useState } from "react";

const RestaurantMenu = () => {

    const {id} = useParams();

    const resInfo = useRestaurantMenu(id);
    const [showCateg, setShowCateg] = useState(false);
    if (resInfo === null)
        return null; // Given error before destructuring, data was not fetched NULL error
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategory = categories?.filter((item) => {
        return item.card?.card?.["@type"]?.includes('ItemCategory');
    });
    console.log(itemCategory);
    const showItems = () => {
        setShowCateg(true);
    }
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-2xl my-5">{name}</h1>
                <h3 className="">{cuisines.join(", ")}</h3>
                <p className="font-medium">{costForTwoMessage}</p>
            </div>
            <div className="">
                {itemCategory?.map( items => (
                    <div>
                        <div className="w-6/12 mx-auto border border-solid h-10 flex justify-between px-4 items-center my-4 bg-slate-200">
                            <span className="font-bold" key={items.card.card.title}>{items.card.card.title}</span>
                            <span onClick={showItems}>🔽</span>
                        </div>
                        <div>
                            <CategoryMenuList data={items?.card?.card?.itemCards} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RestaurantMenu;