/* eslint-disable import/prefer-default-export */
import { months } from '../data/data';

export const getFrequencyText = (frequency: number): string => {
  if (frequency === 1) return 'Once a day';
  if (frequency === 2) return 'Twice a day';

  return `${frequency} times a day`;
};

export const getCurrentMonth = () => months[new Date().getMonth()];

export const getDaysInMonth = (month: number, year: number) => {
  if (month === 1) {
    // February
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return 29; // Leap year
    }
    return 28; // Common year
  }
  if ([3, 5, 8, 10].includes(month)) {
    // April, June, September, November
    return 30;
  }
  return 31; // January, March, May, July, August, October, December
};
