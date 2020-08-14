import React from 'react';
import Logo from "../../assets/acm-black.png";
import "./Footer.css"
import {NavLink} from "react-router-dom";


export default function Footer() {

    const onScrollToTopClicked = () => {
        window.scrollTo(0, 0);
        return null;
    }


    return <footer>
        <img src={Logo} alt="ACMLogo"/>
        <div className="links">
            <h2>Useful Links</h2>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink exact to="/events">Events</NavLink>
                </li>
            </ul>
        </div>
        <div className="links">
            <h2>External Links</h2>
            <ul>
                <li><a href="https://www.acm.org/" target="blank">ACM Official Page</a></li>
                <li><a href="https://www.mvsrec.edu.in/" target="blank">MVSR Official Page</a></li>
            </ul>
        </div>
        <div className="contact">
            <h2>Contact Us</h2>
            <p>MVSR Engineering College</p>
            <p>Nadergul, Hyderabad</p>
            <p>Telanagana, India</p>
        </div>
       <button onClick={() => onScrollToTopClicked()}>Scroll To Top</button>
    </footer>
}