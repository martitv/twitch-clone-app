import React from "react";
import { StreamItem } from "../components/StreamItem";
import useFetchTwitchData from "../hooks/useFetchTwitchData";
import GridLayout from "../components/GridLayout";
import Title from "../components/Title";

function Streams() {
  const streams = useFetchTwitchData("streams/", {
    imageKey: "thumbnail_url",
    width: 300,
    height: 200
  });
  return (
    <div>
      <Title>Most Popular Streamers</Title>
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

export { Streams };
