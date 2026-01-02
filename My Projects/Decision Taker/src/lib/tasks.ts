import { TimeValue, EnergyValue, MoodValue } from "./constants";

export interface Task {
    id: string;
    text: string;
    duration: number; // in minutes
    type: "physical" | "deep" | "calm" | "momentum" | "general";
}

const TASK_BANK: Task[] = [
    // Low Energy / Short Time -> Physical / Cleanup
    { id: "p1", text: "Clean your desk surface.", duration: 10, type: "physical" },
    { id: "p2", text: "Do 20 pushups.", duration: 5, type: "physical" },
    { id: "p3", text: "Water the plants.", duration: 10, type: "physical" },
    { id: "p4", text: "Walk around the room 5 times.", duration: 5, type: "physical" },
    { id: "p5", text: "Stretch for 5 minutes.", duration: 5, type: "physical" },

    // High Energy / Long Time -> Deep Work
    { id: "d1", text: "Write 200 words on current project.", duration: 25, type: "deep" },
    { id: "d2", text: "Refactor one messy function.", duration: 25, type: "deep" },
    { id: "d3", text: "Read documentation for 20 mins.", duration: 20, type: "deep" },
    { id: "d4", text: "Draft a new feature proposal.", duration: 30, type: "deep" },
    { id: "d5", text: "Solve one medium coding problem.", duration: 45, type: "deep" },

    // Stressed -> Calming
    { id: "c1", text: "Box breathe for 5 minutes.", duration: 5, type: "calm" },
    { id: "c2", text: "Listen to one song, eyes closed.", duration: 5, type: "calm" },
    { id: "c3", text: "Write down 3 things bothering you.", duration: 10, type: "calm" },
    { id: "c4", text: "Make a cup of tea/coffee slowly.", duration: 10, type: "calm" },

    // Lazy -> Momentum
    { id: "m1", text: "Open your IDE and type one line.", duration: 5, type: "momentum" },
    { id: "m2", text: "Reply to one easy email.", duration: 5, type: "momentum" },
    { id: "m3", text: "File your desktop icons.", duration: 5, type: "momentum" },
    { id: "m4", text: "Read one article you saved.", duration: 10, type: "momentum" },
];

export const DEFAULT_TASKS = TASK_BANK;

export function getTask(
    time: TimeValue,
    energy: EnergyValue,
    mood: MoodValue,
    tasks: Task[] = TASK_BANK
): Task {
    const timeInt = parseInt(time);

    // 1. Priority: Mood = Stressed
    if (mood === "stressed") {
        const calmTasks = tasks.filter(t => t.type === "calm");
        if (calmTasks.length > 0) return calmTasks[Math.floor(Math.random() * calmTasks.length)];
    }

    // 2. Priority: Mood = Lazy
    if (mood === "lazy") {
        const momentumTasks = tasks.filter(t => t.type === "momentum");
        if (momentumTasks.length > 0) return momentumTasks[Math.floor(Math.random() * momentumTasks.length)];
    }

    // 3. Logic: Low Energy + Short Time (< 30)
    if (energy === "low" && timeInt < 30) {
        const physicalTasks = tasks.filter(t => t.type === "physical");
        if (physicalTasks.length > 0) return physicalTasks[Math.floor(Math.random() * physicalTasks.length)];
    }

    // 4. Logic: High Energy + Long Time (>= 30)
    if (energy === "high" && timeInt >= 30) {
        const deepTasks = tasks.filter(t => t.type === "deep");
        if (deepTasks.length > 0) return deepTasks[Math.floor(Math.random() * deepTasks.length)];
    }

    // Fallback: Filter by time constraint only
    const possibleTasks = tasks.filter(t => t.duration <= timeInt);
    if (possibleTasks.length > 0) {
        return possibleTasks[Math.floor(Math.random() * possibleTasks.length)];
    }

    // Ultimate fallback: Random from all tasks or just the first one if safe
    return tasks[Math.floor(Math.random() * tasks.length)] || TASK_BANK[0];
}
