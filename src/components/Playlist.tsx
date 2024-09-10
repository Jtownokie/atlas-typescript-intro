// Playlist Component
import PlayListItem from "./PlayListItem";
import { AppContext } from "../MusicPlayer";
import { useContext } from "react";
import { useSongSelect } from "../hooks/useSongSelect";

export type SongObject = {
  id: Number,
  title: string,
  artist: string,
  genre: string,
  duration: string,
  cover: string
}

export default function Playlist() {
  const context = useContext(AppContext);
  const { selectedSong, handleSongChange } = useSongSelect();

  // Check if context is null
  if (!context) {
    return;
  }

  const { data } = context;

  if (!data) {
    return;
  }

  return (
    <div className="flex w-1/2 flex-col border-t p-6 sm:w-full md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold text-gold">Playlist</h2>
      <div className="flex flex-col pr-4">
        {data.map((song: SongObject, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            artist={song.artist}
            songLength={song.duration}
            backgroundColor={selectedSong === index ? "bg-light-burgundy" : ""}
            onClick={() => handleSongChange(index)}
          />
        ))}
      </div>
    </div>
  );
}
