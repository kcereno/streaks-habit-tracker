import React from 'react';

function HabitGrid() {
  const days: number[] = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className="" data-testid="HabitGridView">
      <div className="card shadow-xl ">
        <div className="overflow-x-auto mt-10 text-center ">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Habit</th>
                {days.map((day) => (
                  <td key={day}>{day}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reading</td>
                {days.map((day) => (
                  <td key={day}>
                    <input type="checkbox" className="checkbox checkbox-xs" />
                  </td>
                ))}
              </tr>
              <tr>
                <td>Exercise</td>
                {days.map((day) => (
                  <td key={day}>
                    <input type="checkbox" className="checkbox checkbox-xs" />
                  </td>
                ))}
              </tr>
              <tr>
                <td>Eat Vegetables</td>
                {days.map((day) => (
                  <td key={day}>
                    <input type="checkbox" className="checkbox checkbox-xs" />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HabitGrid;
