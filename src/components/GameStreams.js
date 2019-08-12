import React, { useState, useEffect } from "react";
import api from "../api";
import styles from "./GameStreams.module.css";
import { StreamItem } from "./StreamItem";

function GameStreams({ match, location }) {
  const [streams, setStreams] = useState([]);
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${location.state.gameId}`
      );
      let data = result.data.data;
      let finalData = data.map(stream => {
        return {
          ...stream,
          thumbnail_url: stream.thumbnail_url
            .replace("{width}", "300")
            .replace("{height}", "200")
        };
      });
      let totalViewers = finalData.reduce((acc, {viewer_count}) => {
          return acc + viewer_count;
      }, 0);
      setViewers(totalViewers);
      setStreams(finalData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Most Popular Streamers</h1>
      <h2 className={styles.title}>There are currently <u style={{color: 'purple'}}>{viewers}</u> viwers watching <u style={{color: 'purple'}}>{match.params.id}</u></h2>
      <div className={styles.streams_grid}>
        {streams.map(({ thumbnail_url, user_name, id }) => (
          <StreamItem user_name={user_name} thumbnail_url={thumbnail_url} key={id}></StreamItem>
        ))}
        </div>
    </div>
  );
}

export { GameStreams };
