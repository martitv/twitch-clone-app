import React from "react";
import styles from "./StreamItem.module.css";

export default function StreamItem({user_name, thumbnail_url}) {
    return (
        <div className={styles.stream_item}>
        <div className={styles.thumbnail}>
            <img src={thumbnail_url} alt={user_name}></img>
        </div>
        <div className={styles.stream_name}>
        <span>{user_name}</span>
        </div>
      </div>
    )
}