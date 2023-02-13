interface Props {
  name: string;
  icon: string;
}

function HabitGridItem({ name, icon }: Props) {
  const progressVal = { '--value': 70 } as React.CSSProperties;

  return (
    <div className="container w-80  bg-base-300 text-center rounded ">
      {/* Streak Data */}
      <div className="streak-data mt-4 text-gray-500">
        <p className="font-bold">Streak</p>
        <div className="flex justify-around">
          <div className="">Current: 4</div>
          <div className="">Longest: 10</div>
        </div>
      </div>

      {/* Habit Data */}
      <div className="habit-data mt-10">
        <div className="icon mb-4">
          <p className="text-7xl ">{icon}</p>
        </div>
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p>Once a day</p>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-data flex flex-col items-center mt-8">
        <div className="radial-progress" style={progressVal}>
          70%
        </div>
        <div className="mt-4">
          <p> 1/2</p>
        </div>

        <div className="buttons flex my-4 gap-1">
          <button type="button" className="btn btn-outline">
            -
          </button>
          <button type="button" className="btn btn-outline">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitGridItem;