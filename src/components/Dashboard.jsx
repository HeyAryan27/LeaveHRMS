import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { dashboardData } from '../utils/constant'; 
import MyTeam from './MyTeam';
import MyTeams from './MyTeams';
import Timing from './Timing';
import Book from './Book';
import Totalteam from './Totalteam';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className=" p-2   bg-white rounded-lg shadow-md">
      
      <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <h1 className="text-lg font-semibold" style={{fontSize:"25px"}}><b>Good Afternoon, {dashboardData.user}!</b></h1>
        
      
        <div className="flex items-center  rounded-lg p-2 px-4">
          <div className="flex flex-col items-center mr-4">
            <span className="text-xs text-gray-600">Current time</span>
            <span className="text-lg font-semibold">{formatTime(currentTime)}</span>
          </div>
          <FaRegClock className="w-6 h-6" />
        </div>
      </div>
    
      <p className="text-xs text-gray-600 mt-2  md:-mt-5">You have {dashboardData.leaveRequests} leave requests pending.</p>

      <div className="  flex flex-col md:flex-col lg:flex-row justify-between flex-wrap gap-4 mt-6">
    
        <div className="flex-1 ">
          <MyTeams />
        </div>

      
        

      
        <div className="flex-1">
          <Timing />
        </div>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-4">
        <div className="flex-1">
          <MyTeam />
    
        </div>
        <div className="flex-1 ">
          <Book />  
          <Totalteam/>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
