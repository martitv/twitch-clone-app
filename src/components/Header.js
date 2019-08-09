import React, { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [activeTab, setActiveTab] = useState(null);
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

  useLayoutEffect(() => {
    if (activeTab) {
      activeTab.classList.add(styles.active);
    }
    return () => {
      if (activeTab) {
        activeTab.classList.remove(styles.active);
      }
    };
  }, [activeTab]);

  return (
    <nav ref={navRef}>
      <ul>
        <li onClick={el => setActiveTab(el.currentTarget)}>
          <Link to="/">Top Games</Link>
        </li>
        <li onClick={el => setActiveTab(el.currentTarget)}>
          <Link to="/top-streams">Top Live Streams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
