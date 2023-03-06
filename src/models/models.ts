export interface HabitI {
  id: string;
  icon: string;
  name: string;
  progress: number;
  goal: number;
  streaks: {
    current: number;
    longest: number;
  };
  logs: HabitLogI[];
}

export interface HabitLogI {
  date: string;
  completed: boolean;
}

export type ViewTypes = 'board' | 'grid';

export type HabitFormFields = 'habitName' | 'habitGoal' | 'habitIcon';

export interface HabitInputI {
  value: string;
  touched: boolean;
  valid: boolean;
}
