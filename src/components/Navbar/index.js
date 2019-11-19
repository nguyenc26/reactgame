import React, { Component } from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <a className="navbar-brand mb-0 h1" href="/">Memory Game</a>
                <a>SCORE INFO HERE</a>
            </nav>
        </div>
    );
}

export default Navbar;