"use client";

import { useState, useEffect } from "react";
import InputScreen from "@/components/InputScreen";
import ExecutionScreen from "@/components/ExecutionScreen";
import TaskManagementScreen from "@/components/TaskManagementScreen";
import { getTask, Task } from "@/lib/tasks";
import { TimeValue, EnergyValue, MoodValue } from "@/lib/constants";
import { useTasks } from "@/hooks/useTasks";

export default function Home() {
  const [view, setView] = useState<"INPUT" | "EXECUTION" | "MANAGE">("INPUT");
  const [task, setTask] = useState<Task | null>(null);
  const { tasks, addTask, removeTask, isLoaded } = useTasks();

  useEffect(() => {
    const handleManage = () => setView("MANAGE");
    window.addEventListener("manage-tasks", handleManage);
    return () => window.removeEventListener("manage-tasks", handleManage);
  }, []);

  const handleDecision = (time: TimeValue, energy: EnergyValue, mood: MoodValue) => {
    const selectedTask = getTask(time, energy, mood, tasks);
    setTask(selectedTask);
    setView("EXECUTION");
  };

  const handleDone = () => {
    setTask(null);
    setView("INPUT");
  };

  if (!isLoaded) return null; // Prevent hydration mismatch

  return (
    <main className="container">
      {view === "INPUT" && (
        <>
          <h1 className="title">Decision Fatigue Killer</h1>
          <p className="subtitle">Eliminate choice. Get to work.</p>
          <InputScreen onSubmit={handleDecision} />
        </>
      )}

      {view === "EXECUTION" && task && (
        <ExecutionScreen task={task} onDone={handleDone} />
      )}

      {view === "MANAGE" && (
        <TaskManagementScreen
          tasks={tasks}
          onAdd={addTask}
          onRemove={removeTask}
          onBack={() => setView("INPUT")}
        />
      )}
    </main>
  );
}
