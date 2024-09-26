import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItems } from "../utils/redux-toolkit/cartSlice";

const Cart = () => {
    const cartItems = useSelector(state => state?.cart?.items);
    const dispatch = useDispatch();
    const removeItem = (menuItem) => {
        dispatch(removeItems(menuItem));
    }

    const clearItem = () => {
        dispatch(clearItems());
    }

    return(
        <div className="">
            <div className="flex justify-center">
                <div className="w-6/12 p-2 flex items-center justify-between">
                    <h1 className="font-bold text-3xl m-4">Cart</h1>
                    <button onClick={clearItem} className="bg-slate-800 text-white rounded-lg p-2">Clear Cart</button>
                </div>
            </div>
            
            <div className="flex justify-center">
                <div className="w-6/12 p-2">
                    {cartItems.length === 0 && <h1 className="font-bold text-2xl mx-40">Please add any item to your Cart</h1>}
                    {cartItems?.map(menuItems => (
                        <div key={menuItems.card.info.id} className="flex justify-between items-center my-4">
                            <div className="p-4">
                                <p className="font-medium text-lg">{menuItems.card.info.name}</p>
                                <p className="font-medium text-md">Rs.{menuItems.card.info.price / 100}</p>
                                <p className="w-80">{menuItems.card.info.description}</p>
                            </div>
                            <div className="relative w-40">
                                <img className="rounded-lg h-[80px] w-[120px] object-center lg:h-[80px] lg:w-[120px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menuItems.card.info.imageId} alt={menuItems.card.info.name} />
                                <div className="absolute left-8 bottom-0 right-0">
                                    <button onClick={() => removeItem(menuItems)} className="bg-slate-800 text-white rounded-md p-1">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Cart;