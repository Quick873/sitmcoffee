import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import './Root.css';

export default function Root () {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}