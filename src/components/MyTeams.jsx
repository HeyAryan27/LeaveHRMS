import { dashboardData } from "../utils/constant";
import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#f00", "#FFBB28", "#a9a9a9"];

const MyTeams = () => {
  const data = dashboardData;
  const data1 = [
    { value: data.attendance.details.InOffice },
    { value: data.attendance.details.Workfromhome },
    { value: data.attendance.details.Halfday },
    { value: data.attendance.details.Onleave },
  ];

  return (
    <div className="col-span-1 w-full bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-80 lg:w-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-base sm:text-lg">
          My Teams
          <p className="text-xs text-gray-600 mt-1 sm:mt-2">
            From 4-10 Sept, 2023
          </p>
        </h2>
      </div>

      {/* Flexbox for pie chart and details */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:h-full">
        <div className="flex justify-center lg:justify-start">
          <PieChart className="lg:mb-28" width={250} height={250}>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              startAngle={-270}
              endAngle={-630}
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={103}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              startAngle={-270}
              endAngle={-630}
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#e8f5e9" />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Percentage display */}
        <div className="absolute top-28 lg:top-16 lg:left-24">
          <span className="text-xl sm:text-2xl font-bold text-gray-700">
            {(data.attendance.details.InOffice +
              data.attendance.details.Halfday +
              data.attendance.details.Workfromhome +
              data.attendance.details.Onleave) /
              4}
            %
          </span>
        </div>

        {/* Attendance details */}
        <div className="mt-8 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 lg:w-auto lg:mb-2 lg:h-full lg:justify-between">
          <ul className="text-sm font-bold space-y-2">
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mr-2 lg:h-16"></span>
              In Office: {data.attendance.details.InOffice}%
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2 lg:h-16"></span>
              Half Day: {data.attendance.details.Halfday}%
            </li>
          </ul>
          <ul className="text-sm font-bold space-y-2">
            <li className="flex items-center">
              <span className="w-5 h-4 rounded-full bg-red-500 mr-2 lg:h-16"></span>
              Work from Home: {data.attendance.details.Workfromhome}%
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-gray-500 mr-2 lg:h-16"></span>
              On Leave: {data.attendance.details.Onleave}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
