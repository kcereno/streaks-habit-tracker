import React from 'react';

function HabitGridView() {
  return (
    <div className="indicator">
      <div className="indicator-item indicator-bottom">
        <button className="btn btn-primary" type="button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card bg-base-200 shadow-xl ">
        <div className="card-body  flex flex-col">
          <div className="habit-grid grid grid-cols-2 gap-10 p-5">
            <div className="w-60 h-60 bg-red-400 border">item1</div>
            <div className="w-60 h-60 bg-red-400 border">item2</div>
            <div className="w-60 h-60 bg-red-400 border">item3</div>
            <div className="w-60 h-60 bg-red-400 border">item4</div>
            <div className="w-60 h-60 bg-red-400 border">item5</div>
            <div className="w-60 h-60 bg-red-400 border">item6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitGridView;
