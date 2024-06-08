import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

export default function Root () {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <p>What is the issue</p>
        </>
    );
}