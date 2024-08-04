import Header from "./Header"
import Body from "./Body";


const AppLayout = () => {
    return (
        <div className="main-div">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <Body />
            </div>
        </div>
    );

}

export default AppLayout;