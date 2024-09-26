import { useDispatch } from "react-redux";
import { addItems } from "../utils/redux-toolkit/cartSlice";


const CategoryMenuList = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    const addItem = (menuItems) => {
        dispatch(addItems(menuItems));
    }
    return (
        <div className="flex justify-center">
            <div className="w-6/12 p-2">
                {data?.map(menuItems =>(
                    <div key={menuItems.card.info.id} className="flex justify-between items-center my-4">
                        <div className="p-4">
                            <p className="font-medium text-lg">{menuItems.card.info.name}</p>
                            <p className="font-medium text-md">Rs.{menuItems.card.info.price/100}</p>
                            <p className="w-80">{menuItems.card.info.description}</p>
                        </div>
                        <div className="relative w-40">
                            <img className="rounded-lg h-[80px] w-[120px] object-center lg:h-[80px] lg:w-[120px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menuItems.card.info.imageId} alt={menuItems.card.info.name} />
                            <div className="absolute left-10 bottom-0 right-0">
                                <button onClick={() => addItem(menuItems)} className="bg-slate-800 text-white rounded-md p-1">Add+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryMenuList;