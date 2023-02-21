/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import HabitCard from '../HabitCard/HabitCard';
import AppContext from '../../store/AppContext/app-context';

import HabitGridItem from '../HabitGridItem/HabitGridItem';
import { HabitI } from '../../models/models';

function HabitGrid() {
  const { habits, updateHabit } = useContext(AppContext);
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
