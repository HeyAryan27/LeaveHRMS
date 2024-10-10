import { dashboardData } from "../utils/constant";
import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#FFBB28", "#f00", "#a9a9a9"];
const ATTENDANCE_TYPES = {
  IN_OFFICE: 'In Office',
  HALF_DAY: 'Half Day',
  WORK_FROM_HOME: 'Work from Home',
  ON_LEAVE: 'On Leave',
};

const MyTeams = () => {
  const { InOffice, Workfromhome, Halfday, Onleave } = dashboardData.attendance.details;
  
  const data1 = [
    { name: ATTENDANCE_TYPES.IN_OFFICE, value: InOffice },
    { name: ATTENDANCE_TYPES.WORK_FROM_HOME, value: Workfromhome },
    { name: ATTENDANCE_TYPES.HALF_DAY, value: Halfday },
    { name: ATTENDANCE_TYPES.ON_LEAVE, value: Onleave },
  ];

  const totalAttendance = InOffice + Workfromhome + Halfday + Onleave;
  const attendancePercentage = totalAttendance / data1.length;

  return (
    <div className="col-span-1 w-full bg-white p-2 sm:p-4 md:p-6 rounded-lg shadow-md border-[1px] lg:h-80 lg:w-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg">
          My Teams
          <p className="text-xs text-gray-600 mt-1 sm:mt-2">From 4-10 Sept, 2023</p>
        </h2>
      </div>

      <div className="relative flex flex-col lg:mt-8 lg:flex-row items-center justify-center lg:justify-between lg:h-full">
        <div className="flex justify-center lg:justify-start">
          <PieChart className="lg:mb-28 " width={150} height={150}>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={0}
              dataKey="value"
              startAngle={-270}
              endAngle={-630}
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Pie
              data={data1}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={73}
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

        <div className="absolute top-16 lg:top-20 lg:left-12">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
            {attendancePercentage}%
          </span>
        </div>

        <div className="mt-4 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 lg:w-auto lg:mb-2 lg:h-full lg:justify-between">
          <ul className="text-xs sm:text-sm font-bold space-y-1">
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-500 mr-1 lg:h-16"></span>
              {ATTENDANCE_TYPES.IN_OFFICE}: {InOffice}%
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1 lg:h-16"></span>
              {ATTENDANCE_TYPES.HALF_DAY}: {Halfday}%
            </li>
          </ul>
          <ul className="text-xs sm:text-sm font-bold space-y-1">
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-1 lg:h-16"></span>
              {ATTENDANCE_TYPES.WORK_FROM_HOME}: {Workfromhome}%
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-gray-500 mr-1 lg:h-16"></span>
              {ATTENDANCE_TYPES.ON_LEAVE}: {Onleave}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
