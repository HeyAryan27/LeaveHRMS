import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function Book() {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="bg-white p-3 h-auto  md:h-56 rounded-lg  shadow-md lg:ml-52 border-[1px]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="mb-4 md:mb-0">
          <h2 className="font-semibold text-lg sm:text-center md:text-left">Book 1 ON 1</h2>
          <div className="text-xs text-gray-600">Colleagues:</div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="find people with '@'"
              className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
            <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
          </div>
          <button className= " bg-blue-500 text-white py-2 px-4 mt-4  rounded-lg w-full">
            Book a Meeting
          </button>
        </div>

        <div className="relative w-full md:w-auto">
          {/* Any additional content for larger screens can go here */}
        </div>
      </div>
    </div>
  );
}

export default Book;
