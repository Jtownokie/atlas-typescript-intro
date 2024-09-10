import { useState } from 'react';

export function useSongSelect() {
  const [currentSong, setCurrentSong] = useState<Number | undefined>(0);

  const handleSongSelect = (id: Number) => {
    setCurrentSong(id);
  };

  return { currentSong, handleSongSelect };
}
