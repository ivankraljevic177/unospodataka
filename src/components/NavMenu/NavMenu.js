import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
//import logo from "../../assets/manifest-icon-192.png";

const NavMenu = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.toolbar_nav}>
        <div></div>
        <div className={styles.toolbar_logo}>
          <a href="/">Priska</a>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.toolbar_items}>
          <ul>
          <li>
              <NavLink
                activeClassName={styles.buttonActive}
                exact
                to="/"
              >
                Novi bris
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={styles.buttonActive}
                exact
                to="/listaracuna"
              >
                Računi
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={styles.buttonActive}
                exact
                to="/listabriseva"
              >
                Lista briseva
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default NavMenu;
