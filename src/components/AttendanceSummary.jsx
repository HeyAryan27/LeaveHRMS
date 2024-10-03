import { dashboardData } from '../utils/constant'; 
import BarAnimation from './Charts';
const AttendanceSummary = () => {
    const data = dashboardData; 
    return (
        <div className="col-span-1 w-auto  lg:w-auto bg-white p-6   rounded-lg lg:h-80 shadow-md border-[1px]">
        <div className="flex justify-between items-center ">
          <h2 className="font-semibold text-lg">Timing
          <p className="text-xs text-gray-600 mt-2  md:-mt-5">From 4-10 Sept,2023</p>
          </h2>
          <div className="relative w-full md:w-auto">
          <select className="block appearance-none w-full md:w-auto py-2 px-3 border border-gray-300 bg-white text-gray-700 text-xs rounded-lg focus:outline-none">
            <option>This Week</option>
            <option>Week 1</option>
            <option>Week 2</option>
            <option>Week 3</option>
          </select>
          <svg className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        </div>
        <BarAnimation/>
        <div>
          <ul className='flex ml-28'>
            <li className="flex justify-between items-center py-2">
            <span className="w-2.5 h-3 rounded-full bg-blue-500 mr-2"></span>Last Week</li>
            <li className="flex justify-between items-center py-2 ml-4">
            <span className="w-2.5 h-3 rounded-full bg-blue-300 mr-2"></span>This Week</li>
          </ul>
        </div>
        
      

  


















  
  {/* <div className="flex flex-col md:flex-row items-center md:mb-4">
    <ul className="mb-4 text-sm space-y-2 -ml-5">
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
        {data.attendance.details.onTime} On time
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></span>
        {data.attendance.details.workFromHome} Work from home
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>
        {data.attendance.details.lateAttendance} Late attendance
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-500 mr-2"></span>
        {data.attendance.details.absent} Absent
      </li>
    </ul>

    
    <div className="relative">
      <svg className="w-36 h-36 mx-auto" viewBox="0 0 80 80">
        <circle
          className="text-gray-300"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="40"
          cy="40"
        />
        
      
        <circle
              className="text-green-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.onTime / 365) * 226} 226`}
              strokeDashoffset="0"
              strokeLinecap="round"
              stroke="lightgreen"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              transform="rotate(-90 40 40)"
            />
        
      
        <circle
              className="text-yellow-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.workFromHome / 365) * 226} ${226 - (data.attendance.details.workFromHome / 365) * 226}`}
              strokeDashoffset={`${226 - (data.attendance.details.onTime / 365) * 226}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
              transform="rotate(-90 40 40)"
            />
        
  
        <circle
              className="text-red-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.lateAttendance / 365) * 226} ${226 - (data.attendance.details.lateAttendance / 365) * 226}`}
              strokeDashoffset={`${185 - (data.attendance.details.workFromHome / 365) * 226}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
        
        <circle
              className="text-gray-500"
              strokeWidth="6"
              strokeDasharray={`${(data.attendance.details.absent / 365) * 226} ${226 - (data.attendance.details.absent / 365) * 226}`}
              strokeDashoffset={`${156 - (data.attendance.details.lateAttendance / 365) * 226}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="40"
              cy="40"
            />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center flex-col top-5">
        <span className="text-xl font-semibold text-gray-700">
          {data.attendance.details.onTime +
            data.attendance.details.workFromHome +
            data.attendance.details.lateAttendance +
            data.attendance.details.absent}
        </span>
        <span className="text-sm font-semibold text-gray-500">/ 365</span>
      </div>
    </div>
  </div> */}

        </div>
    )
}

export default AttendanceSummary