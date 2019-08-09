import React, { useState, useEffect } from "react";
import api from '../api';
import styles from './Games.module.css';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      let data = result.data.data;
      let finalData = data.map(game => {
        return {
          ...game,
          box_art_url: game.box_art_url
            .replace("{width}", "250")
            .replace("{height}", "250")
        };
      });
      setGames(finalData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Most Popular Games</h1>
      <div className={styles.games_grid}>
        {games.map(({ name, box_art_url, id }) => (
          <div className={styles.game_item} key={id}>
            <div className={styles.game_box_art}>
              <img src={box_art_url} alt={name} />
            </div>
            <div className={styles.game_name}>
              <span>{name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Games };
