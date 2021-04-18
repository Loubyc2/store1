import "./Header.css";
import { Link } from "react-router-dom";

// Icons
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";



function Header() {
    return (
        <div className="header">
            <div className="header__top">
                <AiIcons.AiOutlineMenu className="header-menu" />
                <Link to="/" className="header-logo">Lb Design</Link>
                <div className="header-right">

                    <Link to="/">
                        <FaIcons.FaShoppingCart />
                        <span className="header__cart-item">0</span>
                    </Link>
                    <Link to="/"><CgIcons.CgLogIn /></Link>
                </div>
            </div>
            <div className="header__search">
                <div className="header__search-input">
                    <span><BiIcons.BiSearch /></span>
                    <input type="text" placeholder="¡Encuentra lo que buscas!" />
                </div>
                <div className="header__search-location">
                    <span><MdIcons.MdLocationOn /></span>
                    <span>Todo el pais</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
