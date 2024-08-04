const Restaurant = (props) => {
    const { resData } = props;
    
    const {name, cuisines, costForTwo, sla, cloudinaryImageId} = resData?.restaurant?.info;
    return (
        <div className="restaurant">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default Restaurant;