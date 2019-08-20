import React from "react";
import { StreamItem } from "../components/StreamItem";
import useFetchTwitchData from "../hooks/useFetchTwitchData";
import GridLayout from "../components/GridLayout";
import Title from "../components/Title";

function GameStreams({ match, location }) {
  const streams = useFetchTwitchData(
    `streams?game_id=${location.state.gameId}`,
    { imageKey: "thumbnail_url", width: 300, height: 200 }
  );

  const viewers = streams.reduce((acc, { viewer_count }) => {
    return acc + viewer_count;
  }, 0);

  return (
    <div>
      <Title>Most Popular Streamers</Title>
      <Title small>
        There are currently <u style={{ color: "purple" }}>{viewers}</u> viwers
        watching <u style={{ color: "purple" }}>{match.params.id}</u>
      </Title>
      <GridLayout>
        {streams.map(({ thumbnail_url, user_name, id }) => (
          <StreamItem
            user_name={user_name}
            thumbnail_url={thumbnail_url}
            key={id}
          />
        ))}
      </GridLayout>
    </div>
  );
}

export { GameStreams };
