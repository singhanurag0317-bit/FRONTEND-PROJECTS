"use client";

import { useState } from "react";
import { Task } from "@/lib/tasks";

interface TaskManagementScreenProps {
  tasks: Task[];
  onAdd: (task: Task) => void;
  onRemove: (id: string) => void;
  onBack: () => void;
}

export default function TaskManagementScreen({ tasks, onAdd, onRemove, onBack }: TaskManagementScreenProps) {
  const [text, setText] = useState("");
  const [duration, setDuration] = useState("10");
  const [type, setType] = useState<Task["type"]>("general");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      duration: parseInt(duration),
      type,
    };

    onAdd(newTask);
    setText("");
  };

  return (
    <div className="manage-screen">
      <header className="header">
        <button className="btn-back" onClick={onBack}>← BACK</button>
        <h2 className="title-small">MANAGE TASKS</h2>
      </header>

      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New task description..."
          className="input-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="form-row">
          <select
            className="input-select"
            value={type}
            onChange={(e) => setType(e.target.value as Task["type"])}
          >
            <option value="general">General</option>
            <option value="physical">Physical</option>
            <option value="deep">Deep Work</option>
            <option value="calm">Calm</option>
            <option value="momentum">Momentum</option>
          </select>

          <select
            className="input-select"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="5">5 min</option>
            <option value="10">10 min</option>
            <option value="25">25 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
          </select>

          <button type="submit" className="btn-add" disabled={!text.trim()}>
            ADD
          </button>
        </div>
      </form>

      <div className="task-list">
        {tasks.slice().reverse().map((task) => (
          <div key={task.id} className="task-item">
            <div className="task-info">
              <span className="task-text">{task.text}</span>
              <span className="task-meta">{task.type} • {task.duration}m</span>
            </div>
            <button className="btn-delete" onClick={() => onRemove(task.id)}>
              ×
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .manage-screen {
          width: 100%;
          animation: fadeIn 0.3s ease-out;
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .btn-back {
          font-size: 0.9rem;
          color: var(--muted);
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
        }
        
        .btn-back:hover {
          color: var(--foreground);
          background: var(--surface);
        }

        .title-small {
          flex: 1;
          text-align: center;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-right: 40px;
          color: var(--foreground);
        }

        .add-form {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .input-text {
          width: 100%;
          padding: 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--foreground);
          font-size: 1rem;
          font-family: inherit;
          margin-bottom: 1rem;
          border-radius: var(--radius);
          transition: border-color 0.2s;
        }

        .input-text:focus {
          border-color: var(--primary);
        }

        .form-row {
          display: flex;
          gap: 10px;
        }

        .input-select {
          flex: 1;
          padding: 0.8rem;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--foreground);
          border-radius: var(--radius);
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .input-select:focus {
           border-color: var(--primary);
        }

        .btn-add {
          background: var(--primary);
          color: var(--primary-fg);
          border: none;
          padding: 0 1.5rem;
          font-weight: 600;
          border-radius: var(--radius);
        }
        .btn-add:disabled {
          background: var(--surface-hover);
          color: var(--muted-dark);
          cursor: not-allowed;
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 50vh;
          overflow-y: auto;
          padding-right: 5px;
        }

        /* Scrollbar styling */
        .task-list::-webkit-scrollbar {
          width: 6px;
        }
        .task-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .task-list::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 3px;
        }

        .task-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--surface);
          padding: 1rem 1.25rem;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          transition: border-color 0.2s;
        }

        .task-item:hover {
          border-color: var(--border-active);
        }

        .task-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .task-text {
          font-size: 1rem;
          font-weight: 500;
        }

        .task-meta {
          font-size: 0.75rem;
          color: var(--muted);
          text-transform: capitalize;
          background: var(--surface-hover);
          padding: 2px 8px;
          border-radius: 4px;
          align-self: flex-start;
          display: inline-block;
        }

        .btn-delete {
          color: var(--muted);
          font-size: 1.5rem;
          padding: 0.5rem;
          border-radius: 50%;
          line-height: 1;
        }

        .btn-delete:hover {
          color: var(--error);
          background: rgba(239, 68, 68, 0.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
