// Playlist Component
import PlayListItem from "./PlayListItem";
import { AppContext } from "../MusicPlayer";
import { useContext } from "react";
import { ContextType } from "../MusicPlayer";

type SongObject = {
  id: Number,
  title: string,
  artist: string,
  genre: string,
  duration: string,
  cover: string
}

export default function Playlist() {
  const context = useContext(AppContext);

  // Check if context is null
  if (!context) {
    return <div>Loading...</div>; // or handle this case appropriately
  }

  const { data, loading } = context;

  return (
    <div className="flex w-1/2 flex-col border-t p-6 sm:w-full md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold text-gold">Playlist</h2>
      <div className="flex flex-col pr-4">
        {data.map((song: SongObject) => (
          <PlayListItem
            title={song.title}
            artist={song.artist}
            songLength={song.duration}
            backgroundColor=""
          />
        ))}
      </div>
    </div>
  );
}
