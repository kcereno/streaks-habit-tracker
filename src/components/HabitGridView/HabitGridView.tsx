import React from 'react';

function HabitGridView() {
  return (
    <div className="habit-grid grid grid-cols-2 gap-10  p-10">
      <div className="w-60 h-60 bg-red-400 border">item1</div>
      <div className="w-60 h-60 bg-red-400 border">item2</div>
      <div className="w-60 h-60 bg-red-400 border">item3</div>
      <div className="w-60 h-60 bg-red-400 border">item4</div>
      <div className="w-60 h-60 bg-red-400 border">item5</div>
      <div className="w-60 h-60 bg-red-400 border">item6</div>
    </div>
  );
}

export default HabitGridView;
