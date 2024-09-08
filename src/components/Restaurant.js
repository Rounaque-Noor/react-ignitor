import { Link } from "react-router-dom";

const Restaurant = (props) => {
    const { resData } = props;
    
    const {name, cuisines, costForTwo, sla, cloudinaryImageId, id} = resData?.restaurant?.info;
    return (
        <Link to={"/restaurant/"+id}>
            <div className="m-2 p-2 w-[200px] h-[350px] bg-gray-100 hover:bg-gray-200 rounded-lg">
                <img className="rounded-lg h-[120px] w-full object-cover object-center lg:h-[120px] lg:w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
                <h3 className="font-bold py-4 text-md">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </Link>
        
    )
}

export const ComponentPromoted = (Restaurant) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white">Promoted</label>
                <Restaurant {...props}/>
            </div>
        )
    }
}

export default Restaurant;