import React from "react";
import styles from "./Title.module.css";

function Title(props) {
  return props.small ? (
    <h2 className={styles.title}>{props.children}</h2>
  ) : (
    <h1 className={styles.title}>{props.children}</h1>
  );
}

export default Title;
