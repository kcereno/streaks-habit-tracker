import { HabitI } from '../models/models';

const habits: HabitI[] = [
  {
    id: 1,
    icon: '🏋️‍♂️',
    name: 'Exercise',
    progress: 1,
    goal: 1,
    logs: [
      { date: '2022-02-14', completed: true },
      { date: '2022-02-15', completed: true },
      { date: '2022-02-16', completed: false },
      { date: '2022-02-17', completed: true },
      { date: '2022-02-18', completed: false },
      { date: '2022-02-19', completed: true },
      { date: '2022-02-20', completed: false },
    ],
  },
  {
    id: 2,
    icon: '📚',
    name: 'Read',
    progress: 2,
    goal: 5,
    logs: [
      { date: '2022-02-14', completed: true },
      { date: '2022-02-15', completed: true },
      { date: '2022-02-16', completed: true },
      { date: '2022-02-17', completed: false },
      { date: '2022-02-18', completed: true },
      { date: '2022-02-19', completed: true },
      { date: '2022-02-20', completed: true },
    ],
  },
  {
    id: 3,
    icon: '🥗',
    name: 'Eat Healthy',
    progress: 1,
    goal: 3,
    logs: [
      { date: '2022-02-14', completed: false },
      { date: '2022-02-15', completed: true },
      { date: '2022-02-16', completed: false },
      { date: '2022-02-17', completed: false },
      { date: '2022-02-18', completed: true },
      { date: '2022-02-19', completed: false },
      { date: '2022-02-20', completed: false },
    ],
  },
  {
    id: 4,
    icon: '🎨',
    name: 'Draw',
    progress: 1,
    goal: 2,
    logs: [
      { date: '2022-02-14', completed: true },
      { date: '2022-02-15', completed: true },
      { date: '2022-02-16', completed: true },
      { date: '2022-02-17', completed: true },
      { date: '2022-02-18', completed: true },
      { date: '2022-02-19', completed: true },
      { date: '2022-02-20', completed: true },
    ],
  },
];

export default habits;
