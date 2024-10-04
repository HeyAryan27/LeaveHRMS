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