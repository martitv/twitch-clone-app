import React, { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    let header = navRef.current;
    let sticky = header.offsetTop;
    let jumpHeight = header.offsetHeight;

    let handleScroll = () => {
      if (window.pageYOffset > sticky) {
        document.body.style.paddingTop = `${jumpHeight}px`;
        header.classList.add(styles.sticky);
      } else {
        document.body.style.paddingTop = 0;
        header.classList.remove(styles.sticky);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={styles.nav} ref={navRef}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/" activeClassName={styles.active} exact>
            Top Games
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/top-streams" activeClassName={styles.active} exact>
            Top Live Streams
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
