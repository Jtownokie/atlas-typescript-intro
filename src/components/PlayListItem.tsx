// Playlist Item Component

type PlayListItemProps = {
  title: string,
  artist: string,
  backgroundColor: string,
  songLength: string
};

export default function PlayListItem({ title, artist, songLength, backgroundColor}: PlayListItemProps) {
  return (
    <div
      className={`mb-1 flex flex-row items-center justify-between rounded-md cursor-pointer ${backgroundColor ? backgroundColor : ""}`}
    >
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gold">{title}</p>
        <p className="text-sm font-medium text-cyan">{artist}</p>
      </div>
      <p className="text-sm font-medium text-cyan">{songLength}</p>
    </div>
  );
}
