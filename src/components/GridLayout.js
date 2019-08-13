import React from "react";
import styles from "./GridLayout.module.css";

function GridLayout(props) {
  return <div className={styles.grid_layout}>{props.children}</div>;
}

export default GridLayout;
