export interface Habit {
  id: number;
  name: string;
  icon: string;
  frequency: number;
}

export type ViewTypes = 'board' | 'grid';
