import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavbarComponent from "../components/navbar"
import Bottom from "../components/Bottom";


function App() {
    return (
        <>
            <Router>
                <NavbarComponent />
                <Bottom />
            </Router>
        </>
    );
}

export default App;