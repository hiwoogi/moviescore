import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> {/* Fixed the closing tag here */}
        </div>
    );
}

export default Navigation;