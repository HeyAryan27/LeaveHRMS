import { dashboardData } from '../utils/constant'; 

const Attendance = () => {
  const data = dashboardData;

  
  const getStrokeDashOffset = (percentage) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <div className="col-span-1  w-full lg:w-fit   bg-white p-6 rounded-lg lg:h-80  xl:w-full shadow-md border-[1px]">
      <div className="flex justify-between items-center md:mb-4 -mb-2">
        <h2 className="font-semibold text-lg">My Teams</h2>
        
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

      

      <div className="relative  flex">
      <svg className="w-40 h-30 " viewBox="0 0 80 80">
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
              stroke="blue"
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
    
    <ul className=" text-sm space-y-2  ">
      <li className="flex items-center  py-1">
        <span className="w-2.5 h-16 rounded-full bg-blue-500 mr-2"></span>
        In Office <br></br>
        {data.attendance.details.onTime} 
      </li>

      <li className="flex items-center py-1">
        <span className="w-2.5 h-16 rounded-full bg-yellow-500 mr-2"></span>
        Half Day <br></br> {data.attendance.details.workFromHome}
      </li>
     
    </ul>
    <ul  className=" text-sm space-y-2 ">
    <li className="flex items-center py-1">
        <span className="w-2.5 h-16 rounded-full bg-red-500 mr-2"></span>
      Work from home <br></br>  {data.attendance.details.lateAttendance} 
      </li>
      <li className="flex items-center py-1">
        <span className="w-2.5 h-16 rounded-full bg-gray-500 mr-2"></span>
        On Leave <br></br> {data.attendance.details.absent}
      </li>
    </ul>
    
      

      {/* <div className="absolute inset-0 flex items-center justify-center flex-col top-5">
        <span className="text-xl font-semibold text-gray-700">
          {data.attendance.details.onTime +
            data.attendance.details.workFromHome +
            data.attendance.details.lateAttendance +
            data.attendance.details.absent}
        </span>
        <span className="text-sm font-semibold text-gray-500">/ 365</span>
      </div> */}
      
      
    </div>
      
   

  
      
    </div>
  );
};

export default Attendance;
