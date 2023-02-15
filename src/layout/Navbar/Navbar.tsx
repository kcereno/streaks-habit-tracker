import ViewToggle from '../../components/ViewToggle/ViewToggle';

function Navbar() {
  return (
    <div className="bg-base-300 flex justify-center py-2">
      <div className="navbar w-[1300px] ">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-xl">
            Streaks - Daily Habit Tracker
          </p>
        </div>
        <div className="flex-none">
          <ViewToggle view="board" updateView={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
