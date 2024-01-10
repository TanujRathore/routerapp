import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Component/globalStyles";
import { lightTheme, darkTheme } from "./Component/Theme"
import { useState } from "react";

export default function Layout() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>

        <>
        <GlobalStyles/>
        {/* <button onClick={themeToggler}>Switch theme</button> */}
            <Header />
            <Outlet />
            <Footer />
        </>
        </ThemeProvider>
    )
}