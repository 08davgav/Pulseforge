export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string; // Dynamic Lucide icon key
  benefits: string[];
  weeklyPlan?: ServiceWeeklyPlan;
}

export interface ScheduleDay {
  day: string;
  title: string;
  description: string;
  badge?: string;
  items: string[];
}

export interface ServiceWeeklyPlan {
  durationText: string;
  introText: string;
  schedule: ScheduleDay[];
}

export interface Exercise {
  name: string;
  reps: string;
  sets: string;
  tempo: string;
  instructions: string;
  safetyTip: string;
}

export interface RehabWeek {
  week: number;
  title: string;
  focus: string;
  summary: string;
  exercises: Exercise[];
}

export interface StoryboardLine {
  timePosition: string;
  title: string;
  description: string;
  visualCue: string;
  voiceoverSec: string;
  feeling: string;
}

export interface AiTextPreset {
  id: string;
  title: string;
  category: "patient_info" | "social_media";
  originalText: string;
  generatedText: string;
  explanation: string;
}
