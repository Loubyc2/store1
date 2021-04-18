import React from 'react'
import { NavLink } from 'react-router-dom';
import "./HomeNav.css"

function HomeNav() {
    return (
        <div className="home">
            <div className="home-top">
                <nav className="home__nav-links">
                    <NavLink to="/" activeStyle={{ color: "red" }} className="nav-link">Destacados</NavLink>
                    <NavLink to="/recomend" className="nav-link">Recomendados</NavLink>
                    <NavLink to="/" className="nav-link">Bombazos</NavLink>
                    <NavLink to="/" className="nav-link">Supermercado</NavLink>
                    <NavLink to="/" className="nav-link">Protegete</NavLink>
                    <NavLink to="/" className="nav-link">Bombazos</NavLink>
                    <NavLink to="/" className="nav-link">Cursos</NavLink>
                    <NavLink to="/" className="nav-link">Gift_card_ripley_Agr</NavLink>
                    <NavLink to="/" className="nav-link">Hogar</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default HomeNav;
