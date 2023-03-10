/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HabitLogI } from '../models/models';
/* eslint-disable import/prefer-default-export */
import { months } from '../data/data';

export const getFrequencyText = (frequency: number): string => {
  if (frequency === 1) return 'Once a day';
  if (frequency === 2) return 'Twice a day';

  return `${frequency} times a day`;
};

export const getCurrentMonth = () => months[new Date().getMonth()];

export const getDaysInMonth = (month: number, year: number) => {
  if (month === 2) {
    // February
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return 29; // Leap year
    }
    return 28; // Common year
  }
  if ([4, 6, 9, 11].includes(month)) {
    // April, June, September, November
    return 30;
  }
  return 31; // January, March, May, July, August, October, December
};

export const generateDateId = (year: number, month: number, day: number) => {
  const convertedDay = day.toString().length === 1 ? `0${day}` : day;
  const convertedMonth = month.toString().length === 1 ? `0${month}` : month;

  return `${year}-${convertedMonth}-${convertedDay}`;
};

export const validateHabitInput = (input: string | number) => {
  if (typeof input === 'number') {
    return input > 0;
  }
  return input.length > 0;
};

export const generateId = (habitName: string) => {
  const timestamp = new Date().getTime();
  return habitName + timestamp;
};

export const isEmoji = (string: string) => {
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  return emojiRegex.test(string);
};

export const getTodaysFormattedDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return `${year}-${month}-${day}`;
};
// Convert date to YYYY-MM-DD format
export const formatDate = (date: Date): string => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

export const calculateLongestStreak = (logs: HabitLogI[]) => {
  let currentStreak = 0;
  let longestStreak = 0;

  const followingDayHasLog = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() + 1);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const followingDay = `${year}-${month}-${day}`;

    const followingDayLog = logs.find((log) => log.date === followingDay);
    return followingDayLog;
  };

  const sortedLogs = logs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  sortedLogs.forEach((log) => {
    if (log.completed) {
      currentStreak++;

      if (!followingDayHasLog(log.date)) {
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
        currentStreak = 0;
      }
    }

    if (!log.completed) {
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
      currentStreak = 0;
    }
  });

  return longestStreak;
};

export const calculateCurrentStreak = (logs: HabitLogI[]): number => {
  const sortedLogs = logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let currentStreak = 0;
  let priorLogIsCompleted: boolean;

  const today = formatDate(new Date()); // 2021-08-01

  const hasCompletedLog = (date: string) => {
    const foundLog = sortedLogs.find((log) => log.date === date);
    return foundLog?.completed;
  };

  const decrementDate = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00Z`);
    date.setUTCDate(date.getUTCDate() - 1);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const yesterday = decrementDate(today);
  let currentDate = yesterday;

  if (hasCompletedLog(yesterday)) {
    priorLogIsCompleted = true;
    currentStreak++;
    currentDate = decrementDate(yesterday);
  } else {
    priorLogIsCompleted = false;
  }

  while (priorLogIsCompleted) {
    if (hasCompletedLog(currentDate)) {
      currentStreak++;
      currentDate = decrementDate(currentDate);
    } else {
      priorLogIsCompleted = false;
    }
  }

  if (hasCompletedLog(today)) currentStreak++;

  return currentStreak;
};

export const isFutureDate = (date: string) => new Date(date) > new Date();
