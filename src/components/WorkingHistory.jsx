// WorkingHistory.js
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
function WorkingHistory() {
  
   
  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="bg-white p-4 h-56 rounded-lg shadow-md   lg:ml-52   border-[1px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-4 md:mb-0">
          <h2 className="font-semibold text-lg  md:text-left">Book 1 ON 1</h2>
          
         <div style={{fontSize:"12px"}}>Colleagues:</div>
         <div className="hidden md:flex relative w-full">
          <input
            type="text"
            placeholder="find people with '@'"
            className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
          />
          
          <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg w-full">Book a Meeting</button>
        </div>
        
        <div className="relative w-full md:w-auto">
          
        
        </div>
        
      </div>

     
      </div>
  );
}

export default WorkingHistory;
