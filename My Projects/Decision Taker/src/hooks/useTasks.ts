"use client";

import { useState, useEffect } from "react";
import { Task, DEFAULT_TASKS } from "@/lib/tasks";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("decision_fatigue_tasks");
        if (saved) {
            try {
                setTasks(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse tasks", e);
                setTasks(DEFAULT_TASKS);
            }
        } else {
            setTasks(DEFAULT_TASKS);
        }
        setIsLoaded(true);
    }, []);

    const saveTasks = (newTasks: Task[]) => {
        setTasks(newTasks);
        localStorage.setItem("decision_fatigue_tasks", JSON.stringify(newTasks));
    };

    const addTask = (task: Task) => {
        const newTasks = [...tasks, task];
        saveTasks(newTasks);
    };

    const removeTask = (id: string) => {
        const newTasks = tasks.filter((t) => t.id !== id);
        saveTasks(newTasks);
    };

    const resetTasks = () => {
        saveTasks(DEFAULT_TASKS);
    };

    return { tasks, addTask, removeTask, resetTasks, isLoaded };
}
