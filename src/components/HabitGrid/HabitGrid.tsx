/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import HabitGridItem from '../HabitGridItem/HabitGridItem';

function HabitGrid() {
  return (
    <section className="" data-testid="habit-grid">
      <div className="habit-grid-container flex flex-wrap gap-4">
        <HabitGridItem />
        <HabitGridItem />
        <HabitGridItem />
        <HabitGridItem />
      </div>
    </section>
  );
}

export default HabitGrid;
