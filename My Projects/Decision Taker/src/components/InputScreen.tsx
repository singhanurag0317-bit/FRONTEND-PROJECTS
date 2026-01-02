"use client";

import { useState } from "react";
import {
    TIME_OPTIONS,
    ENERGY_OPTIONS,
    MOOD_OPTIONS,
    TimeValue,
    EnergyValue,
    MoodValue
} from "@/lib/constants";

interface InputScreenProps {
    onSubmit: (time: TimeValue, energy: EnergyValue, mood: MoodValue) => void;
}

export default function InputScreen({ onSubmit }: InputScreenProps) {
    const [time, setTime] = useState<TimeValue | null>(null);
    const [energy, setEnergy] = useState<EnergyValue | null>(null);
    const [mood, setMood] = useState<MoodValue | null>(null);

    const isReady = time && energy && mood;

    return (
        <div className="input-screen">
            <div className="section">
                <h2 className="section-title">Time Available</h2>
                <div className="options-grid">
                    {TIME_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            className={`option-btn ${time === opt.value ? "selected" : ""}`}
                            onClick={() => setTime(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Energy Level</h2>
                <div className="options-grid">
                    {ENERGY_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            className={`option-btn ${energy === opt.value ? "selected" : ""}`}
                            onClick={() => setEnergy(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Current Mood</h2>
                <div className="options-grid">
                    {MOOD_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            className={`option-btn ${mood === opt.value ? "selected" : ""}`}
                            onClick={() => setMood(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="action-area">
                <button
                    className="btn-primary"
                    disabled={!isReady}
                    onClick={() => isReady && onSubmit(time, energy, mood)}
                >
                    {isReady ? "ELIMINATE CHOICE" : "SELECT ALL"}
                </button>
            </div>

            <div className="footer-action">
                <button className="btn-text" onClick={() => window.dispatchEvent(new CustomEvent("manage-tasks"))}>
                    Manage Tasks
                </button>
            </div>

            <style jsx>{`
        .input-screen {
          display: flex;
          flex-direction: column;
          gap: 1.5rem; /* Reduced from 3rem */
          width: 100%;
          height: 100%;
          justify-content: center;
          animation: fadeIn 0.5s ease-out;
        }

        .footer-action {
            text-align: center;
            margin-top: 1rem; /* Restored some breathing room */
        }

        .btn-text {
            color: var(--muted);
            font-size: 1rem; /* Increased from 0.8rem */
            font-weight: 600;
            text-decoration: none;
            padding: 0.75rem 1.5rem; /* Increased padding */
            border-radius: var(--radius);
            background: rgba(255,255,255,0.03); /* Subtle bg hint */
            border: 1px solid transparent;
            transition: all 0.2s;
        }
        
        .btn-text:hover {
            color: var(--foreground);
            background: var(--surface);
            border-color: var(--border);
            transform: translateY(-1px);
        }

        .section-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--muted-dark);
          margin-bottom: 0.75rem; /* Reduced */
          font-weight: 700;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 0.75rem; /* Reduced */
        }

        .option-btn {
          padding: 1rem 0.5rem; /* Reduced padding */
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--surface);
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .option-btn:hover {
          border-color: var(--border-active);
          background: var(--surface-hover);
          color: var(--foreground);
          transform: translateY(-2px);
        }

        .option-btn.selected {
          border-color: var(--primary);
          background: var(--primary);
          color: var(--primary-fg);
          box-shadow: 0 4px 15px -3px rgba(99, 102, 241, 0.4);
          transform: scale(1.02);
        }

        .action-area {
          margin-top: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .btn-primary {
          width: 100%;
          height: 56px; /* Slightly smaller */
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
