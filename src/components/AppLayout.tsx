import { Outlet } from "react-router-dom"; // Ensure correct import
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default AppLayout;
