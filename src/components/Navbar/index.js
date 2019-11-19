import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top">
                    <a className="navbar-brand mb-0 h1" href="/">Memory Game</a>
                    <a className={`nav-item ${this.props.textClass}`}>
                    {this.props.children}
                    </a>
                    <a>Score: {this.props.score} | High Score: {this.props.topScore}</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;