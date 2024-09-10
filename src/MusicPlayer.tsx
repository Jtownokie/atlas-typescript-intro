// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { createContext } from "react";
import { SongObject } from "./components/Playlist";
import { PuffLoader } from "react-spinners";
import { useSongSelect } from "./hooks/useSongSelect";

export type AppContextType = {
  data: [SongObject] | undefined,
  currentSong: Number | undefined,
  handleSongSelect: (id: Number) => void | undefined
}

export const AppContext = createContext<AppContextType>({data: undefined, currentSong: undefined, handleSongSelect: () => {}});

export function MusicPlayer() {
  const { data, loading } = usePlaylistData();
  const { currentSong, handleSongSelect } = useSongSelect();

  if (loading) {
    return (
      <div className="m-auto">
        <PuffLoader
          color="#fddc5c"
          size={250}
        />
      </div>
    );
  }

  return (
    <AppContext.Provider value={{ data, currentSong, handleSongSelect }}>
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col rounded-lg bg-burgundy shadow-xl md:flex-row">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </AppContext.Provider>
  );
}
