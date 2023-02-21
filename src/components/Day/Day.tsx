import React from 'react';

interface Props {
  day: number;
  id: string;
  completed: boolean;
  toggleCompleted: (id: string) => void;
}

// eslint-disable-next-line object-curly-newline
function Day({ day, id, completed, toggleCompleted }: Props) {
  const handleButtonClick = () => {
    toggleCompleted(id);
  };

  return (
    <button
      type="button"
      id={id}
      onClick={handleButtonClick}
      className={`flex items-center justify-center rounded-full p-1.5 text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px] ${
        completed ? 'bg-yellow-500' : null
      }`}
    >
      {day}
    </button>
  );
}

export default Day;
