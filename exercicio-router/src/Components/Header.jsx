import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <nav className={Styles.nav}>
                <ul>
                    <li><NavLink activeClassName={Styles.active} to="/" end>Produtos</NavLink></li>
                    <li><NavLink activeClassName={Styles.active}  to="/contato">Contato</NavLink></li>
                    </ul>
            </nav>   
        </header>
    );
};

export default Header;
