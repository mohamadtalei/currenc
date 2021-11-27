import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Layout = ({ children, onMainPage }) => {
    return (
        <div>
            <Navbar onMainPage={onMainPage} />
            {onMainPage &&
                <Header />
            }
            {children}
        </div>
    );
}

export default Layout;