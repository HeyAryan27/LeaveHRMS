import React from 'react';
import { team } from '../utils/constant';
import "./MyTeam.css"
function MyTeam() {
    const members = team;
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="bg-white p-4  rounded-lg lg:h-auto shadow-md border-[1px] max-w-4xl mx-auto" style={{ width: "780px" }}>
            <h2 className="font-semibold text-lg mb-4">
                My Teams
               
                <p className="text-xs text-gray-600 mt-2 md:-mt-5">From 1-30 Sep, 2023</p>
            </h2>
            

            <div className="overflow-x-auto ">
                <table className="w-full min-w-full table-auto">
                    {/* <tbody>
                        {members.map((member, index) => (
                            <tr key={index} className="text-gray-700 hover:bg-gray-100 border-b">
                            
                                <td className="p-1 text-left flex items-center">
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

                            
                                <td className="flex items-center justify-between space-x-2  w-96 p-2 ml-36 -mt-12    ">
                                    {days.map((day, idx) => (
                                        <div key={idx} className="flex flex-col items-center space-y-1">
                                            
                                            <span className="text-xs text-gray-500">{day}</span>

                                    
                                            <span
                                                className={`w-4 h-4  ${
                                                    member.status && member.status[day] === 'available'
                                                        ? 'bg-blue-500'
                                                        : member.status && member.status[day] === 'unavailable'
                                                        ? 'bg-red-500'
                                                        : member.status && member.status[day] === 'yellow'
                                                        ? 'bg-yellow-500'
                                                        : 'bg-gray-300'
                                                }`}
                                            ></span>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody> */}
                    <div class="border-t border-gray-200 pt-4">
   
     <div class="team-member">
    <img alt="Profile picture of Alena Gouse" height="40" src="https://storage.googleapis.com/a1aa/image/ssItUqqvrV5ffEelR9eLu0RrYFGjTEpeLepyLqKKfvwRepfFnA.jpg" width="40"/>
    <div class="info">
     <h4>
      Shreya
     </h4>
     <p>
      UI Designer 
     </p>
    </div>
    <div class="status">
     <div class="status-circle yellow">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle gray">
     </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle gray">
     </div>
     <div class="status-circle yellow">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
   </div>
   </div>
   <div class="team-member">
    <img alt="Profile picture of Miracle Vetrovs" height="40" src="https://storage.googleapis.com/a1aa/image/UHtk2mRpjHZWGJGIuEuUzb16aJKUIDXdVQjFMcggBtpf0fiTA.jpg" width="40"/>
    <div class="info">
     <h4>
      Nitin
     </h4>
     <p>
      UX Designer
     </p>
    </div>
    <div class="status">
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle gray">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle gray">
     </div>
     <div class="status-circle yellow">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    </div>   
    
    </div >
    <div class="team-member">
    <img alt="Profile picture of Miracle Vetrovs" height="40" src="https://storage.googleapis.com/a1aa/image/UHtk2mRpjHZWGJGIuEuUzb16aJKUIDXdVQjFMcggBtpf0fiTA.jpg" width="40"/>
    <div class="info">
     <h4>
      Rahul
     </h4>
     <p>
      UX Designer 
     </p>
    </div>
    <div class="status">
     <div class="status-circle blue">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle gray">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle gray">
     </div>
     <div class="status-circle yellow">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
    </div>
    </div>
    <div class="team-member">
    <img alt="Profile picture of Miracle Vetrovs" height="40" src="https://storage.googleapis.com/a1aa/image/UHtk2mRpjHZWGJGIuEuUzb16aJKUIDXdVQjFMcggBtpf0fiTA.jpg" width="40"/>
    <div class="info">
     <h4>
      Golu
     </h4>
     <p>
      UX Designer 
     </p>
    </div>
    <div class="status">
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle gray">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle gray">
     </div>
     <div class="status-circle yellow">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
    </div>
    </div>
    <div class="team-member">
    <img alt="Profile picture of Miracle Vetrovs" height="40" src="https://storage.googleapis.com/a1aa/image/UHtk2mRpjHZWGJGIuEuUzb16aJKUIDXdVQjFMcggBtpf0fiTA.jpg" width="40"/>
    <div class="info">
     <h4>
      Kaku
     </h4>
     <p>
      UX Designer
     </p>
    </div>
    <div class="status">
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle gray">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle red">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div class="status-circle gray">
     </div>
     <div class="status-circle yellow">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle gray">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>
     <div class="status-circle blue">
     </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     

    </div>
    </div>
     
                </table>
            </div>
        </div>
    );
}

export default MyTeam;
