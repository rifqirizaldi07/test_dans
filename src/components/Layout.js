import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = () => {
    return (
        <div className="col-md-12">
            <Navbar />
            <div className="body-root">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout