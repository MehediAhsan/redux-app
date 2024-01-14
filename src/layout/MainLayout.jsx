import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className="bg-black text-white min-h-screen px-10">
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;