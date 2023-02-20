/* eslint-disable react/button-has-type */

function Navbar() {
  return (
    <div className="flex justify-center z-10">
      {/* Top Nav */}
      <div className="w-[900px]">
        <div className="flex items-center mx-2 justify-between tablet:mx-4  max:mx-0">
          <div>
            <p className="py-3 font-bold normal-case text-xl text-center tablet:text-left ">
              StreakTracker
            </p>
          </div>
          <div className="">
            <button className="btn btn-ghost btn-circle text-success">
              Add
            </button>
            <button className="btn btn-ghost btn-circle text-warning">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
