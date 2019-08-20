import React from "react";
import styles from "./Games.module.css";
import { Link } from "react-router-dom";
import useFetchTwitchData from "../hooks/useFetchTwitchData";
import GridLayout from "../components/GridLayout";
import Title from "../components/Title";

function Games() {
  const games = useFetchTwitchData("games/top", {
    imageKey: "box_art_url",
    width: 250,
    height: 250
  });

  return (
    <div>
      <Title className={styles.title}>Most Popular Games</Title>
      <GridLayout>
        {games.map(({ name, box_art_url, id }) => (
          <div className={styles.game_item} key={id}>
            <Link
              className={styles.link}
              to={{
                pathname: "game/" + name,
                state: {
                  gameId: id
                }
              }}
            >
              <div className={styles.game_box_art}>
                <img src={box_art_url} alt={name} />
              </div>
              <div className={styles.game_name}>
                <span>{name}</span>
              </div>
            </Link>
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

export { Games };