import { useSpeed } from "../hooks/useSpeed";

export function SpeedButton() {
  const [speed, setSpeed] = useSpeed("1x");

  return (
    <button className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap text-lg font-medium text-gold" onClick={() => setSpeed(speed)}>
      {speed}
    </button>
  );
}
