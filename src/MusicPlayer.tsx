// Music Player Component
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import Playlist from "./components/Playlist";
import { usePlaylistData } from "./hooks/usePlaylistData";
import { createContext } from "react";

export const AppContext = createContext<ContextType | null>(null);

export function MusicPlayer() {
  const { data, loading } = usePlaylistData();

  return (
    <AppContext.Provider value={{ data, loading}}>
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col rounded-lg bg-burgundy shadow-xl md:flex-row">
        <CurrentlyPlaying />
        <Playlist />
      </div>
    </AppContext.Provider>
  );
}
