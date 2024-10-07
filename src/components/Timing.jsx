import BarAnimation from "./Charts";

const Timing = () => {
  return (
    <div className="col-span-1 w-full lg:w-auto bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px]  lg:h-80">
      {/* Header and Dropdown */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="font-semibold text-base sm:text-lg">
          Timing
          <p className="text-xs text-gray-600 mt-1 sm:mt-2 md:mt-0">
            From 4-10 Sept, 2023
          </p>
        </h2>

        <div className="relative mt-4 md:mt-0 w-full md:w-auto">
          <select className="block appearance-none w-full md:w-auto py-2 px-3 border border-gray-300 bg-white text-gray-700 text-xs rounded-lg focus:outline-none">
            <option>This Week</option>
            <option>Week 1</option>
            <option>Week 2</option>
            <option>Week 3</option>
          </select>
          <svg
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full">
        <BarAnimation />
      </div>

      {/* Legend Section */}
      <div className="lg:-mt-4 lg:ml-24 mt-6">
        <ul className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-10">
          <li className="flex items-center py-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-sm">This Week</span>
          </li>
          <li className="flex items-center py-2">
            <span className="w-3 h-3 rounded-full bg-blue-300 mr-2"></span>
            <span className="text-sm">Last Week</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timing;
