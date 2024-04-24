import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import { Outlet } from "react-router-dom"


export const Layaut = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
