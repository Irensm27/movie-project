import Header from "../components/headerComponents/Header.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className="h-px bg-linear-to-r from-transparent via-yellow-400/40 to-transparent"/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;