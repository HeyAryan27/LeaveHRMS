import React from "react";
import { team1 } from "../utils/constant";
import "./MyTeam.css";

function MyTeam() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white p-4  rounded-lg lg:h-auto shadow-md border-[1px] max-w-4xl mx-auto Box">
      <h2 className="font-semibold text-lg mb-4">
        My Team
        <p className="text-xs text-gray-600 mt-2 md:-mt-5">
          From 1-30 Sep, 2023
        </p>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full table-auto ">
          {team1.map((member, index) => (
            <div 
              key={index}
              className="team-member border-t border-gray-200 pt-4 flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="flex items-center">
                <img
                  alt={`Profile picture of ${member.name}`}
                  height="40"
                  src={member.profilePicture}
                  width="40"
                  className="rounded-full"
                />
                <div className="info ml-4">
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>

              <div className="status ml-0 md:ml-auto flex flex-wrap mt-2  md:mt-0">
                {Array.isArray(member.status) ? (
                  member.status.map((status, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`status-circle status-circle--${status.toLowerCase()} mx-1`}
                      title={`${days[dayIndex]}: ${status}`}
                    ></div>
                  ))
                ) : (
                  <p className="text-red-500">Invalid status data</p>
                )}
              </div>
            </div>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyTeam;
