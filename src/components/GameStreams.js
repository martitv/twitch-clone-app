import React, { useState, useEffect } from "react";
import api from "../api";

function GameStreams({ match, location }) {
  const [streamData, setStreamData] = useState([]);
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id${location.state.gameId}`
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
      setStreamData(finalData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <li>{match.params.id}</li>
      <li>{location.state.gameId}</li>
    </div>
  );
}

export { GameStreams };
