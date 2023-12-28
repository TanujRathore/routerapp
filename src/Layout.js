import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}