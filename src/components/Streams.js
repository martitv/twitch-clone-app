import React, { useState, useEffect } from "react";
import api from "../api";
import styles from "./Streams.module.css";

/*
    game_id: "488552"
    id: "35219258112"
    language: "en"
    started_at: "2019-08-08T21:43:09Z"
    tag_ids: (2) ["6ea6bca4-4712-4ab9-a906-e3336a9d8039", "541af8c5-c53a-426a-bbe3-40f93d03274e"]
    thumbnail_url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_overwatchleague-{width}x{height}.jpg"
    title: "ReWatch | 2019 Season | Stage 4 | Week 3 | Day 1↵↵↵↵↵↵"
    type: "live"
    user_id: "137512364"
    user_name: "OverwatchLeague"
    viewer_count: 29572
*/

function Streams() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/streams/");
      let data = result.data.data;
      let finalData = data.map(stream => {
        return {
          ...stream,
          thumbnail_url: stream.thumbnail_url.replace("{width}", "300").replace("{height}", "200")
        };
      });
      setStreams(finalData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Most Popular Streamers</h1>
      <div className={styles.streams_grid}>
        {streams.map(({ thumbnail_url, user_name, id }) => (
          <div className={styles.stream_item} key={id}>
            <div className={styles.thumbnail}>
                <img src={thumbnail_url} alt={user_name}></img>
            </div>
            <div className={styles.stream_name}>
            <span>{user_name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Streams;
