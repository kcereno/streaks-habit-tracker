import { HabitI } from '../models/models';

const mockHabits: HabitI[] = [
  {
    id: '1',
    icon: '🏋️‍♂️',
    name: 'Exercise',
    progress: 0,
    goal: 2,
    streaks: {
      current: 0,
      longest: 59,
    },
    logs: [
      { date: '2023-01-01', completed: true },
      { date: '2023-01-02', completed: true },
      { date: '2023-01-03', completed: true },
      { date: '2023-01-04', completed: true },
      { date: '2023-01-05', completed: true },
      { date: '2023-01-06', completed: true },
      { date: '2023-01-07', completed: true },
      { date: '2023-01-08', completed: true },
      { date: '2023-01-09', completed: true },
      { date: '2023-01-10', completed: true },
      { date: '2023-01-11', completed: true },
      { date: '2023-01-12', completed: true },
      { date: '2023-01-13', completed: true },
      { date: '2023-01-14', completed: true },
      { date: '2023-01-15', completed: true },
      { date: '2023-01-16', completed: true },
      { date: '2023-01-17', completed: true },
      { date: '2023-01-18', completed: true },
      { date: '2023-01-19', completed: true },
      { date: '2023-01-20', completed: true },
      { date: '2023-01-21', completed: true },
      { date: '2023-01-22', completed: true },
      { date: '2023-01-23', completed: true },
      { date: '2023-01-24', completed: true },
      { date: '2023-01-25', completed: true },
      { date: '2023-01-26', completed: true },
      { date: '2023-01-27', completed: true },
      { date: '2023-01-28', completed: true },
      { date: '2023-01-29', completed: true },
      { date: '2023-01-30', completed: true },
      { date: '2023-01-31', completed: true },
      { date: '2023-02-01', completed: true },
      { date: '2023-02-02', completed: true },
      { date: '2023-02-03', completed: true },
      { date: '2023-02-04', completed: true },
      { date: '2023-02-05', completed: true },
      { date: '2023-02-06', completed: true },
      { date: '2023-02-07', completed: true },
      { date: '2023-02-08', completed: true },
      { date: '2023-02-09', completed: true },
      { date: '2023-02-10', completed: true },
      { date: '2023-02-11', completed: true },
      { date: '2023-02-12', completed: true },
      { date: '2023-02-13', completed: true },
      { date: '2023-02-14', completed: true },
      { date: '2023-02-15', completed: true },
      { date: '2023-02-16', completed: true },
      { date: '2023-02-17', completed: true },
      { date: '2023-02-18', completed: true },
      { date: '2023-02-19', completed: true },
      { date: '2023-02-20', completed: true },
      { date: '2023-02-21', completed: true },
      { date: '2023-02-22', completed: true },
      { date: '2023-02-23', completed: true },
      { date: '2023-02-24', completed: true },
      { date: '2023-02-25', completed: true },
      { date: '2023-02-26', completed: true },
      { date: '2023-02-27', completed: true },
      { date: '2023-02-28', completed: true },
      { date: '2023-03-1', completed: true },
    ],
  },
  {
    id: '2',
    icon: '📚',
    name: 'Read',
    progress: 2,
    goal: 5,
    streaks: {
      current: 0,
      longest: 4,
    },
    logs: [
      { date: '2023-01-01', completed: false },
      { date: '2023-01-02', completed: false },
      { date: '2023-01-03', completed: true },
      { date: '2023-01-04', completed: false },
      { date: '2023-01-05', completed: true },
      { date: '2023-01-06', completed: false },
      { date: '2023-01-07', completed: true },
      { date: '2023-01-08', completed: true },
      { date: '2023-01-09', completed: false },
      { date: '2023-01-10', completed: true },
      { date: '2023-01-11', completed: false },
      { date: '2023-01-12', completed: false },
      { date: '2023-01-13', completed: false },
      { date: '2023-01-14', completed: true },
      { date: '2023-01-15', completed: true },
      { date: '2023-01-16', completed: true },
      { date: '2023-01-17', completed: true },
      { date: '2023-01-18', completed: false },
      { date: '2023-01-19', completed: true },
      { date: '2023-01-20', completed: false },
      { date: '2023-01-21', completed: false },
      { date: '2023-01-22', completed: true },
      { date: '2023-01-23', completed: false },
      { date: '2023-01-24', completed: true },
      { date: '2023-01-25', completed: false },
      { date: '2023-01-26', completed: true },
      { date: '2023-01-27', completed: true },
      { date: '2023-01-28', completed: true },
      { date: '2023-01-29', completed: false },
      { date: '2023-01-30', completed: false },
      { date: '2023-01-31', completed: true },
      { date: '2023-02-01', completed: true },
      { date: '2023-02-02', completed: true },
      { date: '2023-02-03', completed: false },
      { date: '2023-02-04', completed: true },
      { date: '2023-02-05', completed: false },
      { date: '2023-02-06', completed: true },
      { date: '2023-02-07', completed: false },
      { date: '2023-02-08', completed: true },
      { date: '2023-02-09', completed: true },
      { date: '2023-02-10', completed: true },
      { date: '2023-02-11', completed: false },
      { date: '2023-02-12', completed: false },
      { date: '2023-02-13', completed: true },
      { date: '2023-02-14', completed: true },
      { date: '2023-02-15', completed: false },
      { date: '2023-02-16', completed: true },
      { date: '2023-02-17', completed: true },
      { date: '2023-02-18', completed: false },
      { date: '2023-02-19', completed: true },
      { date: '2023-02-20', completed: true },
      { date: '2023-02-21', completed: false },
      { date: '2023-02-22', completed: false },
      { date: '2023-02-23', completed: true },
      { date: '2023-02-24', completed: false },
      { date: '2023-02-25', completed: true },
      { date: '2023-02-26', completed: false },
      { date: '2023-02-27', completed: true },
      { date: '2023-02-28', completed: false },
    ],
  },
  {
    id: '3',
    icon: '🥗',
    name: 'Eat Healthy',
    progress: 1,
    goal: 3,
    streaks: {
      current: 0,
      longest: 5,
    },
    logs: [
      { date: '2023-01-01', completed: false },
      { date: '2023-01-02', completed: false },
      { date: '2023-01-03', completed: true },
      { date: '2023-01-04', completed: false },
      { date: '2023-01-05', completed: true },
      { date: '2023-01-06', completed: false },
      { date: '2023-01-07', completed: true },
      { date: '2023-01-08', completed: true },
      { date: '2023-01-09', completed: false },
      { date: '2023-01-10', completed: true },
      { date: '2023-01-11', completed: false },
      { date: '2023-01-12', completed: false },
      { date: '2023-01-13', completed: true },
      { date: '2023-01-14', completed: true },
      { date: '2023-01-15', completed: true },
      { date: '2023-01-16', completed: true },
      { date: '2023-01-17', completed: true },
      { date: '2023-01-18', completed: false },
      { date: '2023-01-19', completed: true },
      { date: '2023-01-20', completed: false },
      { date: '2023-01-21', completed: false },
      { date: '2023-01-22', completed: true },
      { date: '2023-01-23', completed: false },
      { date: '2023-01-24', completed: true },
      { date: '2023-01-25', completed: false },
      { date: '2023-01-26', completed: true },
      { date: '2023-01-27', completed: true },
      { date: '2023-01-28', completed: true },
      { date: '2023-01-29', completed: false },
      { date: '2023-01-30', completed: false },
      { date: '2023-01-31', completed: true },
      { date: '2023-02-01', completed: true },
      { date: '2023-02-02', completed: true },
      { date: '2023-02-03', completed: false },
      { date: '2023-02-04', completed: true },
      { date: '2023-02-05', completed: false },
      { date: '2023-02-06', completed: true },
      { date: '2023-02-07', completed: false },
      { date: '2023-02-08', completed: true },
      { date: '2023-02-09', completed: true },
      { date: '2023-02-10', completed: true },
      { date: '2023-02-11', completed: false },
      { date: '2023-02-12', completed: true },
      { date: '2023-02-13', completed: true },
      { date: '2023-02-14', completed: true },
      { date: '2023-02-15', completed: false },
      { date: '2023-02-16', completed: true },
      { date: '2023-02-17', completed: true },
      { date: '2023-02-18', completed: false },
      { date: '2023-02-19', completed: true },
      { date: '2023-02-20', completed: true },
      { date: '2023-02-21', completed: true },
      { date: '2023-02-22', completed: false },
      { date: '2023-02-23', completed: true },
      { date: '2023-02-24', completed: false },
      { date: '2023-02-25', completed: true },
      { date: '2023-02-26', completed: false },
      { date: '2023-02-27', completed: true },
      { date: '2023-02-28', completed: false },
    ],
  },
  {
    id: '4',
    icon: '🎨',
    name: 'Draw',
    progress: 1,
    goal: 4,
    streaks: {
      current: 0,
      longest: 4,
    },
    logs: [
      { date: '2023-01-01', completed: false },
      { date: '2023-01-02', completed: false },
      { date: '2023-01-03', completed: true },
      { date: '2023-01-04', completed: false },
      { date: '2023-01-05', completed: true },
      { date: '2023-01-06', completed: false },
      { date: '2023-01-07', completed: true },
      { date: '2023-01-08', completed: true },
      { date: '2023-01-09', completed: false },
      { date: '2023-01-10', completed: true },
      { date: '2023-01-11', completed: false },
      { date: '2023-01-12', completed: false },
      { date: '2023-01-13', completed: false },
      { date: '2023-01-14', completed: true },
      { date: '2023-01-15', completed: true },
      { date: '2023-01-16', completed: true },
      { date: '2023-01-17', completed: true },
      { date: '2023-01-18', completed: false },
      { date: '2023-01-19', completed: true },
      { date: '2023-01-20', completed: false },
      { date: '2023-01-21', completed: true },
      { date: '2023-01-22', completed: true },
      { date: '2023-01-23', completed: false },
      { date: '2023-01-24', completed: true },
      { date: '2023-01-25', completed: false },
      { date: '2023-01-26', completed: true },
      { date: '2023-01-27', completed: true },
      { date: '2023-01-28', completed: true },
      { date: '2023-01-29', completed: false },
      { date: '2023-01-30', completed: false },
      { date: '2023-01-31', completed: true },
      { date: '2023-02-01', completed: true },
      { date: '2023-02-02', completed: true },
      { date: '2023-02-03', completed: false },
      { date: '2023-02-04', completed: true },
      { date: '2023-02-05', completed: false },
      { date: '2023-02-06', completed: true },
      { date: '2023-02-07', completed: false },
      { date: '2023-02-08', completed: true },
      { date: '2023-02-09', completed: true },
      { date: '2023-02-10', completed: true },
      { date: '2023-02-11', completed: false },
      { date: '2023-02-12', completed: true },
      { date: '2023-02-13', completed: true },
      { date: '2023-02-14', completed: true },
      { date: '2023-02-15', completed: false },
      { date: '2023-02-16', completed: true },
      { date: '2023-02-17', completed: true },
      { date: '2023-02-18', completed: false },
      { date: '2023-02-19', completed: true },
      { date: '2023-02-20', completed: true },
      { date: '2023-02-21', completed: false },
      { date: '2023-02-22', completed: false },
      { date: '2023-02-23', completed: true },
      { date: '2023-02-24', completed: false },
      { date: '2023-02-25', completed: true },
      { date: '2023-02-26', completed: false },
      { date: '2023-02-27', completed: true },
      { date: '2023-02-28', completed: false },
    ],
  },
  {
    id: '5',
    icon: '🚰',
    name: 'Drink Water',
    progress: 2,
    goal: 1,
    streaks: {
      current: 0,
      longest: 0,
    },
    logs: [
      { date: '2023-02-15', completed: true },
      { date: '2023-02-16', completed: false },
      { date: '2023-02-19', completed: true },
      { date: '2023-02-20', completed: false },
    ],
  },
  {
    id: '6',
    icon: '🌅',
    name: 'Meditate',
    progress: 1,
    goal: 2,
    streaks: {
      current: 0,
      longest: 1,
    },
    logs: [
      { date: '2023-02-15', completed: true },
      { date: '2023-02-19', completed: false },
    ],
  },
  {
    id: '7',
    icon: '🎸',
    name: 'Practice Guitar',
    progress: 4,
    goal: 5,
    streaks: {
      current: 0,
      longest: 0,
    },
    logs: [],
  },
];

export default mockHabits;

export const months = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
