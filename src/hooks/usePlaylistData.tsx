import { useEffect, useState } from "react";

const url = "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist"

export function usePlaylistData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
  }, []);

  return { data, loading };
}
