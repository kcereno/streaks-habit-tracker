import React from 'react';

interface Props {
  day: number;
  id: string;
  completed: boolean;
}

function Day({ day, id, completed }: Props) {
  return (
    <button
      type="button"
      id={id}
      onClick={() => console.log('clicked')}
      className={`flex items-center justify-center rounded-full p-1.5 text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px] ${
        completed ? 'bg-yellow-500' : null
      }`}
    >
      {day}
    </button>
  );
}

export default Day;
