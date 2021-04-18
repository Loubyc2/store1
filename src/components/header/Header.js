import React from 'react';
import "./Header.css";


// Icons
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as CgIcons from "react-icons/cg";

//logo
import logoHeader from "../../img/motorola-logo.png";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header__top">
                <BiIcons.BiMenuAltLeft className="Header__menu" />
                <Link to="/"> <img className="header-logo" src={logoHeader} alt="header-logo" /></Link>
                <div className="header__right">
                    <Link to="/"><FiIcons.FiUser /></Link>
                    <Link to="/"> <CgIcons.CgShoppingCart /></Link>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__search">
                    <input type="text" placeholder="Buscar" />
                    <BiIcons.BiSearch className="header__bottom-search-icon" />
                </div>
            </div>
        </div>
    )
}

export default Header
