/* eslint-disable react/button-has-type */

function Navbar() {
  return (
    <>
      {/* Top Nav */}
      <div className="flex justify-center z-10">
        {/* Top Nav */}
        <div className="w-[1200px]">
          <div className="tablet:flex items-center justify-between tablet:mx-4 ">
            <div>
              <p className="py-3 font-bold normal-case text-xl text-center tablet:text-left ">
                Streaks - Daily Habit Tracker
              </p>
            </div>
            <div className="hidden tablet:block">Add Habit</div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="btm-nav tablet:hidden">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V18M6 12h12"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
