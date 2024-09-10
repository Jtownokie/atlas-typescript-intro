// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { createContext } from "react";
import { SongObject } from "./components/Playlist";
import { PuffLoader } from "react-spinners";
import { useSongSelect } from "./hooks/useSongSelect";

export type AppContextType = {
  data: [SongObject] | undefined
}

export const AppContext = createContext<AppContextType>({data: undefined});

export function MusicPlayer() {
  const { data, loading } = usePlaylistData();

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
    <AppContext.Provider value={{ data }}>
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col rounded-lg bg-burgundy shadow-xl md:flex-row">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </AppContext.Provider>
  );
}
