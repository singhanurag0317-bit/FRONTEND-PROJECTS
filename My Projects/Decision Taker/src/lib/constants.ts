export const TIME_OPTIONS = [
    { label: "10 min", value: "10" },
    { label: "25 min", value: "25" },
    { label: "60 min", value: "60" },
    { label: "2+ hrs", value: "120" },
] as const;

export const ENERGY_OPTIONS = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
] as const;

export const MOOD_OPTIONS = [
    { label: "Lazy", value: "lazy" },
    { label: "Neutral", value: "neutral" },
    { label: "Motivated", value: "motivated" },
    { label: "Stressed", value: "stressed" },
] as const;

export type TimeValue = typeof TIME_OPTIONS[number]["value"];
export type EnergyValue = typeof ENERGY_OPTIONS[number]["value"];
export type MoodValue = typeof MOOD_OPTIONS[number]["value"];
