import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../components/NavBar";
import Bottom from "../components/Bottom";


//import { } from "../pages";
function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Bottom />
            </Router>
        </>
    );
}

export default App;