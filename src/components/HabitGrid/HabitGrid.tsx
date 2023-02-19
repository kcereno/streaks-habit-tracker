/* eslint-disable max-len */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import HabitBoardItem from '../HabitBoard/HabitBoardItem/HabitBoardItem';
import HabitGridItem from '../HabitGridItem/HabitGridItem';

function HabitGrid() {
  return (
    <div className="" data-testid="HabitGridView">
      <div className="habit-grid-container  flex flex-wrap gap-4">
        <HabitGridItem />
        <HabitGridItem />
      </div>
    </div>
  );
}

export default HabitGrid;
