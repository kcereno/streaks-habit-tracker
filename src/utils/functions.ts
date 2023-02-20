/* eslint-disable import/prefer-default-export */
import { months } from '../data/data';

export const getFrequencyText = (frequency: number): string => {
  if (frequency === 1) return 'Once a day';
  if (frequency === 2) return 'Twice a day';

  return `${frequency} times a day`;
};

export const getCurrentMonth = () => months[new Date().getMonth()];
