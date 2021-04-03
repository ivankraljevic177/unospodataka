import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
import logo from "../../assets/manifest-icon-192.png";

const NavMenu = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.toolbar_nav}>

        <div></div>
        <div className ={styles.toolbar_logo}>
          <a href="/">LOGO</a>
        </div>
        <div className = {styles.toolbar_items}>
        <NavLink
            
            className={styles.button}
            activeClassName={styles.buttonActive}
            exact
            to="/listaracuna"
          >
            Računi
          </NavLink>
          <NavLink
            
            className={styles.button}
            activeClassName={styles.buttonActive}
            exact
            to="/listabriseva"
          >
            Lista briseva
          </NavLink>

          <NavLink
            
            className={styles.button}
            activeClassName={styles.buttonActive}
            exact
            to="/"
          >
            Novi bris
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default NavMenu;
