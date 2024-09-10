import { useState } from 'react';

export function useSongSelect() {
  const [selectedSong, setSelectedSong] = useState<Number | undefined>(undefined);

  const handleSongChange = (id: Number) => {
    setSelectedSong(id);
  };

  return { selectedSong, handleSongChange };
}
