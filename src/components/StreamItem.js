import React from "react";
import styles from "./StreamItem.module.css";

function StreamItem({ user_name, thumbnail_url }) {
  return (
    <div className={styles.stream_item}>
      <a
        href={"https://twitch.tv/" + user_name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.thumbnail}>
          <img src={thumbnail_url} alt={user_name} />
        </div>
        <div className={styles.stream_name}>
          <span>{user_name}</span>
        </div>
      </a>
    </div>
  );
}

export { StreamItem };
