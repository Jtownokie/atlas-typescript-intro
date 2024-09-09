// Playlist Item Component

export default function PlayListItem(props) {
  return (
    <div
      className={`mb-1 flex flex-row items-center justify-between rounded-md ${props.backgroundColor ? props.backgroundColor : ""}`}
    >
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gold">{props.title}</p>
        <p className="text-sm font-medium text-cyan">{props.artist}</p>
      </div>
      <p className="text-sm font-medium text-cyan">{props.songLength}</p>
    </div>
  );
}
