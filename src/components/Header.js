import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useStatusOnline();

    const cartItems = useSelector((state) => state?.cart?.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-gray-200 shadow-xl">
            <div className="">
                <img className="p-8 w-40" src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" alt="" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Contact</li>
                    <li className="px-4">Cart ({cartItems.length})</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;