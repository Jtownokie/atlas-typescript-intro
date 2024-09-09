// Cover Art Component
import coverArt from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="mb-6">
      <img
        className="rounded-md"
        src={coverArt}
        alt="Album Cover Placeholder Art"
      ></img>
    </div>
  );
}
