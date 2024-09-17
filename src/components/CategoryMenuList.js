

const CategoryMenuList = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className="flex justify-center">
            <div className="w-6/12 p-2">
                {data?.map(menuItems =>(
                    <div className="flex justify-between items-center my-4">
                        <div className="p-4" key={menuItems.card.info.id}>
                            <p className="font-medium text-lg">{menuItems.card.info.name}</p>
                            <p className="w-80">{menuItems.card.info.description}</p>
                        </div>
                        <div className="w-40">
                            <img className="rounded-lg h-[80px] w-[120px] object-center lg:h-[80px] lg:w-[120px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menuItems.card.info.imageId} alt="preview" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryMenuList;