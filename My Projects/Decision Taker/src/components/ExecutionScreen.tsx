"use client";

import { useState } from "react";
import { Task } from "@/lib/tasks";
import Timer from "./Timer";

interface ExecutionScreenProps {
    task: Task;
    onDone: () => void;
}

export default function ExecutionScreen({ task, onDone }: ExecutionScreenProps) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);

    // Auto-start timer on mount or just let it render?
    // User request: "enabled after timer starts". 
    // Let's assume timer starts automatically on mount for "No distractions".

    return (
        <div className="execution-screen">
            <div className="task-container">
                <h2 className="label">YOUR TASK</h2>
                <h1 className="task-text">{task.text}</h1>
            </div>

            <Timer
                durationMinutes={task.duration}
                onComplete={() => setTimerFinished(true)}
            />

            <button
                className="btn-primary"
                onClick={onDone}
            >
                MARK AS DONE
            </button>

            <style jsx>{`
        .execution-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          animation: appear 0.5s ease-out;
        }

        .label {
          font-size: 0.9rem;
          letter-spacing: 0.25em;
          color: var(--primary); /* Accent color */
          margin-bottom: 2rem;
          text-transform: uppercase;
          font-weight: 700;
        }

        .task-text {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 3rem;
          max-width: 800px;
          background: linear-gradient(to bottom right, #fff, #bbb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-primary {
          margin-top: 3rem;
          height: 72px;
          padding: 0 4rem;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
        }

        .btn-primary:hover {
          transform: scale(1.05);
        }

        @keyframes appear {
          from { opacity: 0; scale: 0.95; }
          to { opacity: 1; scale: 1; }
        }

        @media (max-width: 600px) {
          .task-text {
            font-size: 2rem;
          }
        }
      `}</style>
        </div>
    );
}
