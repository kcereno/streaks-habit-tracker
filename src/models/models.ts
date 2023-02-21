export interface HabitI {
  id: number;
  icon: string;
  name: string;
  progress: number;
  goal: number;
  logs: HabitLogI[];
}

export interface HabitLogI {
  date: string;
  completed: boolean;
}

export type ViewTypes = 'board' | 'grid';
