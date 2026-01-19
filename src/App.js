import React, { useState, useEffect } from 'react';
import { Edit2, Save } from 'lucide-react';

const TimetableApp = () => {
  const [selectedYear, setSelectedYear] = useState('mtech');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timetables, setTimetables] = useState({});

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Initialize timetables structure
  useEffect(() => {
    const initTimetables = {
      mtech: {
        name: 'M.Tech / M.Sc / M.S / Ph.D',
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        slots: [
          { time: '8.00-8.50', id: '1', start: '08:00', end: '08:50' },
          { time: '9.00-9.50', id: '2', start: '09:00', end: '09:50' },
          { time: '10.00-10.50', id: '3', start: '10:00', end: '10:50' },
          { time: '11.00-11.50', id: '4', start: '11:00', end: '11:50' },
          { time: '12.00-12.50', id: '5', start: '12:00', end: '12:50' },
          { time: 'Lunch', id: 'lunch', start: '12:50', end: '14:00' },
          { time: '14.00-15.15', id: '6', start: '14:00', end: '15:15' },
          { time: '15.30-16.45', id: '7', start: '15:30', end: '16:45' },
          { time: '17.00-17.50', id: '8', start: '17:00', end: '17:50' }
        ],
        schedule: {
          Mon: [
            { course: 'A', courseName: '', room: '' },
            { course: 'B', courseName: '', room: '' },
            { course: 'C', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'P - H/H1 - M/M2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'J/J3', courseName: '', room: '' }
          ],
          Tue: [
            { course: 'B', courseName: '', room: '' },
            { course: 'C', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'E', courseName: '', room: '' },
            { course: 'A', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'Q - M/M1 - H/H2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'F', courseName: '', room: '' }
          ],
          Wed: [
            { course: 'C', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'E', courseName: '', room: '' },
            { course: 'F', courseName: '', room: '' },
            { course: 'B', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'R - J/J1 - K/K2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' }
          ],
          Thu: [
            { course: 'E', courseName: '', room: '' },
            { course: 'F', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' },
            { course: 'A', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'S - L/L1 - J/J2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'H/H3', courseName: '', room: '' }
          ],
          Fri: [
            { course: 'F', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' },
            { course: 'A', courseName: '', room: '' },
            { course: 'B', courseName: '', room: '' },
            { course: 'C', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'T - K/K1 - L/L2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'E', courseName: '', room: '' }
          ]
        }
      },
      btech: {
        name: 'B.Tech / Dual Degree (Other than 1st year) & M.A',
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        slots: [
          { time: '8.00-8.50', id: '1', start: '08:00', end: '08:50' },
          { time: '9.00-9.50', id: '2', start: '09:00', end: '09:50' },
          { time: '10.00-10.50', id: '3', start: '10:00', end: '10:50' },
          { time: '11.00-11.50', id: '4', start: '11:00', end: '11:50' },
          { time: 'Lunch', id: 'lunch', start: '11:50', end: '13:00' },
          { time: '13.00-13.50', id: '5', start: '13:00', end: '13:50' },
          { time: '14.00-15.15', id: '6', start: '14:00', end: '15:15' },
          { time: '15.30-16.45', id: '7', start: '15:30', end: '16:45' },
          { time: '17.00-17.50', id: '8', start: '17:00', end: '17:50' }
        ],
        schedule: {
          Mon: [
            { course: 'A', courseName: '', room: '' },
            { course: 'B', courseName: '', room: '' },
            { course: 'C', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'G', courseName: '', room: '' },
            { course: 'P - H/H1 - M/M2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'J/J3', courseName: '', room: '' }
          ],
          Tue: [
            { course: 'B', courseName: '', room: '' },
            { course: 'C', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'E', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'A', courseName: '', room: '' },
            { course: 'Q - M/M1 - H/H2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'F', courseName: '', room: '' }
          ],
          Wed: [
            { course: 'C', courseName: '', room: '' },
            { course: 'D', courseName: '', room: '' },
            { course: 'E', courseName: '', room: '' },
            { course: 'F', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'B', courseName: '', room: '' },
            { course: 'R - J/J1 - K/K2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' }
          ],
          Thu: [
            { course: 'E', courseName: '', room: '' },
            { course: 'F', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' },
            { course: 'A', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'D', courseName: '', room: '' },
            { course: 'S - L/L1 - J/J2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'H/H3', courseName: '', room: '' }
          ],
          Fri: [
            { course: 'F', courseName: '', room: '' },
            { course: 'G', courseName: '', room: '' },
            { course: 'A', courseName: '', room: '' },
            { course: 'B', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'C', courseName: '', room: '' },
            { course: 'T - K/K1 - L/L2', courseName: '', room: '' },
            { course: '', courseName: '', room: '' },
            { course: 'E', courseName: '', room: '' }
          ]
        }
      },
      firstyear: {
        name: '1st B.Tech / Dual Degree',
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        slots: [
          { time: '8.00-8.50', id: '1', start: '08:00', end: '08:50' },
          { time: '9.00-9.50', id: '2', start: '09:00', end: '09:50' },
          { time: '10.00-10.50', id: '3', start: '10:00', end: '10:50' },
          { time: '11.00-11.50', id: '4', start: '11:00', end: '11:50' },
          { time: 'Lunch', id: 'lunch', start: '11:50', end: '13:00' },
          { time: '13.00-13.50', id: '5', start: '13:00', end: '13:50' },
          { time: '14.00-14.50', id: '6', start: '14:00', end: '14:50' },
          { time: '15.00-15.50', id: '7', start: '15:00', end: '15:50' },
          { time: '16.00-16.50', id: '8', start: '16:00', end: '16:50' },
          { time: '17.00-17.50', id: '9', start: '17:00', end: '17:50' }
        ],
        schedule: {
          Mon: [
            { course: 'A1', courseName: '', room: '' },
            { course: 'B1', courseName: '', room: '' },
            { course: 'C1', courseName: '', room: '' },
            { course: 'D1 - P2', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'G2', courseName: '', room: '' },
            { course: 'B2', courseName: '', room: '' },
            { course: 'F2 - P1', courseName: '', room: '' },
            { course: 'C2', courseName: '', room: '' },
            { course: 'XX', courseName: '', room: '' }
          ],
          Tue: [
            { course: 'B1', courseName: '', room: '' },
            { course: 'C1', courseName: '', room: '' },
            { course: 'D1', courseName: '', room: '' },
            { course: 'E1 - Q2', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'A2', courseName: '', room: '' },
            { course: 'C2', courseName: '', room: '' },
            { course: 'D2 - Q1', courseName: '', room: '' },
            { course: 'E2', courseName: '', room: '' },
            { course: 'YY', courseName: '', room: '' }
          ],
          Wed: [
            { course: 'C1', courseName: '', room: '' },
            { course: 'D1', courseName: '', room: '' },
            { course: 'E1', courseName: '', room: '' },
            { course: 'F1 - R2', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'B2', courseName: '', room: '' },
            { course: 'D2', courseName: '', room: '' },
            { course: 'F2 - R1', courseName: '', room: '' },
            { course: 'F2', courseName: '', room: '' },
            { course: 'XX', courseName: '', room: '' }
          ],
          Thu: [
            { course: 'E1', courseName: '', room: '' },
            { course: 'F1', courseName: '', room: '' },
            { course: 'G1', courseName: '', room: '' },
            { course: 'A1 - S2', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'D2', courseName: '', room: '' },
            { course: 'F2', courseName: '', room: '' },
            { course: 'G2 - S1', courseName: '', room: '' },
            { course: 'A2', courseName: '', room: '' },
            { course: 'YY', courseName: '', room: '' }
          ],
          Fri: [
            { course: 'F1', courseName: '', room: '' },
            { course: 'G1', courseName: '', room: '' },
            { course: 'A1', courseName: '', room: '' },
            { course: 'B1 - T2', courseName: '', room: '' },
            { course: 'Lunch Break', courseName: '', room: '', isLunch: true },
            { course: 'C2', courseName: '', room: '' },
            { course: 'F2', courseName: '', room: '' },
            { course: 'A2 - T1', courseName: '', room: '' },
            { course: 'B2', courseName: '', room: '' },
            { course: 'XX', courseName: '', room: '' }
          ]
        }
      }
    };
    setTimetables(initTimetables);
  }, []);

  const currentTimetable = timetables[selectedYear];

  // Check if current time falls within a slot
  const isCurrentSlot = (slotStart, slotEnd, day) => {
    const now = currentTime;
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDay = dayNames[now.getDay()];
    
    if (currentDay !== day) return false;

    const [startHour, startMin] = slotStart.split(':').map(Number);
    const [endHour, endMin] = slotEnd.split(':').map(Number);

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const slotStartMinutes = startHour * 60 + startMin;
    const slotEndMinutes = endHour * 60 + endMin;

    return currentMinutes >= slotStartMinutes && currentMinutes < slotEndMinutes;
  };

  const handleCellEdit = (day, slotIndex, field, value) => {
    setTimetables(prev => ({
      ...prev,
      [selectedYear]: {
        ...prev[selectedYear],
        schedule: {
          ...prev[selectedYear].schedule,
          [day]: prev[selectedYear].schedule[day].map((item, idx) =>
            idx === slotIndex ? { ...item, [field]: value } : item
          )
        }
      }
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatSlotTime = (timeString) => {
    if (timeString === 'Lunch') return 'Lunch';
    const [hour, min] = timeString.split(':').map(Number);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${min.toString().padStart(2, '0')} ${period}`;
  };

  const getCurrentClassInfo = () => {
    const now = currentTime;
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDay = dayNames[now.getDay()];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    for (let i = 0; i < currentTimetable.slots.length; i++) {
      const slot = currentTimetable.slots[i];
      const [startHour, startMin] = slot.start.split(':').map(Number);
      const [endHour, endMin] = slot.end.split(':').map(Number);
      const slotStartMinutes = startHour * 60 + startMin;
      const slotEndMinutes = endHour * 60 + endMin;

      if (currentMinutes >= slotStartMinutes && currentMinutes < slotEndMinutes) {
        const classData = currentTimetable.schedule[currentDay]?.[i];
        if (classData) {
          const startTime = formatSlotTime(slot.start);
          const endTime = formatSlotTime(slot.end);
          const slotDisplay = `${startTime} - ${endTime}`;
          return {
            course: classData.course,
            courseName: classData.courseName,
            room: classData.room,
            slot: slotDisplay,
            isLunch: classData.isLunch
          };
        }
      }
    }
    return null;
  };

  if (!currentTimetable) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">IITime</h1>
            <div className="flex items-center gap-2 bg-indigo-50 px-4 py-3 rounded-lg border-2 border-indigo-200">
              <div className="text-right">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">{formatTime(currentTime)}</div>
                <div className="text-xs sm:text-sm text-gray-600">{formatDate(currentTime)}</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Select Year/Program
            </label>
            <div className="flex flex-row gap-2 sm:gap-4 items-center">
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setIsEditing(false);
                }}
                className="flex-1 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="mtech">M.Tech / M.Sc / M.S / Ph.D</option>
                <option value="btech">B.Tech / Dual Degree (Other than 1st year) & M.A</option>
                <option value="firstyear">1st B.Tech / Dual Degree</option>
              </select>

              <button
                onClick={toggleEdit}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isEditing
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isEditing ? (
                <>
                  <Save size={16} className="hidden sm:inline" />
                  Save
                </>
              ) : (
                <>
                  <Edit2 size={16} className="hidden sm:inline" />
                  Edit
                </>
              )}
            </button>
            </div>
          </div>
        </div>

        {/* Current Class Section */}
        {getCurrentClassInfo() && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-4 mb-6">
            {getCurrentClassInfo().isLunch ? (
              <div className="text-center text-sm sm:text-base md:text-lg font-semibold text-green-700">
                🍽️ Lunch Break | {getCurrentClassInfo().slot}
              </div>
            ) : (
              <div className="text-center text-sm sm:text-base md:text-lg font-semibold text-green-700">
                {getCurrentClassInfo().course} | {getCurrentClassInfo().courseName} | {getCurrentClassInfo().room} | {getCurrentClassInfo().slot}
              </div>
            )}
          </div>
        )}

        {/* Timetable */}
        <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-2 border-gray-300 bg-gray-100 p-2 sm:p-3 text-xs sm:text-sm font-semibold w-32 whitespace-nowrap">Time</th>
                {currentTimetable.days.map((day) => (
                  <th key={day} className="border-2 border-gray-300 bg-gray-100 p-2 sm:p-3 text-xs sm:text-sm font-semibold text-center min-w-[120px] sm:min-w-[150px]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTimetable.slots.map((slot, slotIdx) => (
                <tr key={slotIdx}>
                  <td className={`border-2 border-gray-300 p-2 sm:p-3 text-xs sm:text-sm font-semibold text-center w-32 whitespace-nowrap ${
                    slot.id === 'lunch' ? 'bg-orange-100' : 'bg-gray-50'
                  }`}>
                    {slot.id === 'lunch' ? (
                      <div className="flex flex-col items-center">
                        <div>Lunch</div>
                        <div className="text-xs text-orange-600 mt-1">{formatSlotTime(slot.start)} - {formatSlotTime(slot.end)}</div>
                      </div>
                    ) : (
                      `${formatSlotTime(slot.start)} - ${formatSlotTime(slot.end)}`
                    )}
                  </td>
                  {currentTimetable.days.map((day) => {
                    const cell = currentTimetable.schedule[day][slotIdx];
                    const isCurrent = isCurrentSlot(slot.start, slot.end, day);
                    const isLunchCell = cell.isLunch;
                    
                    return (
                      <td 
                        key={`${day}-${slotIdx}`}
                        className={`border-2 border-gray-300 p-2 transition-all ${
                          isCurrent 
                            ? 'bg-green-200 ring-4 ring-green-400 ring-inset shadow-lg' 
                            : isLunchCell 
                              ? 'bg-orange-50' 
                              : ''
                        }`}
                      >
                        {isLunchCell && !isEditing ? (
                          <div className="text-center">
                            <div className="font-semibold text-xs sm:text-sm text-orange-700">
                              🍽️ Lunch Break
                            </div>
                          </div>
                        ) : isEditing ? (
                          <div className="flex flex-col space-y-2">
                            <input
                              type="text"
                              value={cell.course}
                              onChange={(e) => handleCellEdit(day, slotIdx, 'course', e.target.value)}
                              placeholder="Course Code"
                              disabled={isLunchCell}
                              className={`w-32 sm:w-40 px-2 py-1 text-xs sm:text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                                isLunchCell ? 'bg-gray-100 cursor-not-allowed' : ''
                              }`}
                            />
                            <input
                              type="text"
                              value={cell.courseName}
                              onChange={(e) => handleCellEdit(day, slotIdx, 'courseName', e.target.value)}
                              placeholder="Course Name"
                              disabled={isLunchCell}
                              className={`w-32 sm:w-40 px-2 py-1 text-xs sm:text-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                                isLunchCell ? 'bg-gray-100 cursor-not-allowed' : ''
                              }`}
                            />
                            <input
                              type="text"
                              value={cell.room}
                              onChange={(e) => handleCellEdit(day, slotIdx, 'room', e.target.value)}
                              placeholder="Classroom"
                              disabled={isLunchCell}
                              className={`w-32 sm:w-40 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                                isLunchCell ? 'bg-gray-100 cursor-not-allowed' : ''
                              }`}
                            />
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className={`font-semibold text-xs sm:text-sm ${isCurrent ? 'text-green-900' : 'text-gray-800'}`}>
                              {cell.course || '-'}
                            </div>
                            {cell.room && (
                              <div className={`text-xs mt-1 ${isCurrent ? 'text-green-800' : 'text-gray-600'}`}>
                                {cell.room}
                              </div>
                            )}
                            {isCurrent && (
                              <div className="text-xs font-bold text-green-700 mt-1 animate-pulse">
                                ● LIVE NOW
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Legend:</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-200 border-2 border-green-400 rounded"></div>
              <span className="text-xs sm:text-sm text-gray-700">Current Class</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-50 border-2 border-orange-200 rounded"></div>
              <span className="text-xs sm:text-sm text-gray-700">Lunch Break</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm sm:text-base font-semibold text-blue-900 mb-2">Instructions:</h3>
          <ul className="text-xs sm:text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Select your year/program from the dropdown menu</li>
            <li>The current class is highlighted in green based on real-time</li>
            <li>Click "Edit Timetable" to customize your schedule</li>
            <li>Enter course names and room numbers for each slot</li>
            <li>Lunch break cells cannot be edited</li>
            <li>Click "Save Changes" when done editing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimetableApp;
