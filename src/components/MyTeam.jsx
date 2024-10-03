// Filename: MyTeam.js
import React from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { team } from "../utils/constant";

function MyTeam() {
  const members = team;

  return (
    <div
      className="bg-white p-4  rounded-lg shadow-md w-1/2 border-[1px] max-w-4xl mx-auto "
      style={{ width: "780px" }}
    >
      <h2 className="font-semibold text-lg mb-4">
        My Team
        <p className="text-xs text-gray-600 mt-2  md:-mt-5">
          From 4-10 Sept,2023
        </p>
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full table-auto">
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="text-gray-700 hover:bg-gray-100 ">
                <td className="p-1  text-left flex items-center">
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="flex flex-col">
                    <span className="text-blue-900">{member.name}</span>
                    <span className="text-xs text-gray-500">{member.role}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyTeam;
