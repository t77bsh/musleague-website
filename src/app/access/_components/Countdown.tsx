"use client";
import Countdown from "react-countdown";

export default function CountdownComponent() {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <div suppressHydrationWarning>Now launched!</div>;
    } else {
      // Render a countdown
      return (
        <div>
          <div suppressHydrationWarning className="countdown-item">
            {days}
            <div suppressHydrationWarning className="label">
              {" "}
              days
            </div>
          </div>
          <div suppressHydrationWarning className="countdown-item">
            {hours}
            <div suppressHydrationWarning className="label">
              {" "}
              hrs
            </div>
          </div>
          <div suppressHydrationWarning className="countdown-item">
            {minutes}
            <div suppressHydrationWarning className="label">
              {" "}
              mins
            </div>
          </div>
          <div suppressHydrationWarning className="countdown-item">
            {seconds}
            <div suppressHydrationWarning className="label">
              {" "}
              secs
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      suppressHydrationWarning
      className="text-xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center"
    >
      <Countdown date={new Date("2024-01-01T00:00:00")} renderer={renderer} />
    </div>
  );
}
