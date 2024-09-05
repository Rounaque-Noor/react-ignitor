import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
    const onlineStatus = useStatusOnline();
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" alt="" />
            </div>
            <div className="menu-bar">
                <ul>
                    <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;