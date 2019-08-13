import { useState, useEffect } from "react";
import api from "../api";

const useFetchTwitchData = (path, { imageKey, width, height }) => {
  const BASE_URL = "https://api.twitch.tv/helix/";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(BASE_URL + path);
      let data = result.data.data;
      let finalData = data.map(item => {
        return {
          ...item,
          [imageKey]: item[imageKey]
            .replace("{width}", width)
            .replace("{height}", height)
        };
      });
      setData(finalData);
    };
    fetchData();
  }, [path, imageKey, height, width]);

  return data;
};

export default useFetchTwitchData;
