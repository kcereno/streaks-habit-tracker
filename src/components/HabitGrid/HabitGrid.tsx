/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import HabitGridItem from '../HabitGridItem/HabitGridItem';
import { HabitI } from '../../models/models';

interface Props {
  habits: HabitI[];
  updateHabit: (updatedHabit: HabitI) => void;
}

function HabitGrid({ habits, updateHabit }: Props) {
  return (
    <section className="" data-testid="habit-grid">
      <div className="habit-grid-container flex flex-wrap gap-4">
        {habits.map((habit) => (
          <HabitGridItem key={habit.id} habit={habit} />
        ))}
      </div>
    </section>
  );
}

export default HabitGrid;
