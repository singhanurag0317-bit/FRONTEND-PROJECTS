"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  durationMinutes: number;
  onComplete: () => void;
}

export default function Timer({ durationMinutes, onComplete }: TimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, onComplete]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const fmt = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="timer">
      {fmt(minutes)}:{fmt(seconds)}
      <style jsx>{`
        .timer {
          font-family: var(--font-mono);
          font-size: 6rem;
          font-weight: 700;
          color: var(--muted); /* Slightly muted to let task pop */
          margin: 2rem 0;
          tabular-nums: true;
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        @media (max-width: 600px) {
          .timer {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
