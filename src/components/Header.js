import React from "react";
import Logo from "./images/Troll Face.png"

export default function Header() {
    return (
        <header>
            <nav className="project-nav" >
                <img className="troll" src={Logo} alt="logo" />
                <h2 className="project-title" >Meme Generator</h2>
                <h3 className="project-course" >React Course - Project 3</h3>
            </nav>
        </header>
    )
}