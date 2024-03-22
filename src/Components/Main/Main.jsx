import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollButton from "../Shared/ScrollButton";

const Main = () => {
    return (
        <>
           <div>
           <Navbar/>
            <Outlet/>
            <Footer/>
           </div>
           <ScrollButton/>
        </>
    );
};

export default Main;