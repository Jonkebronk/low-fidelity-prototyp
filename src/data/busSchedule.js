// Mock bus schedule data for the prototype
// Bus stop: Gunnarsbyn Centrum (#142)

// Helper to get current time for demo purposes
function getCurrentHour() {
  return new Date().getHours();
}

// Generate bus departures for today based on current time
export function getTodayDepartures() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Full weekday schedule
  const weekdaySchedule = [
    { time: "06:15", destination: "Boden centrum", line: "100" },
    { time: "07:30", destination: "Luleå", line: "200" },
    { time: "08:45", destination: "Boden centrum", line: "100" },
    { time: "10:00", destination: "Boden centrum", line: "100" },
    { time: "11:30", destination: "Luleå", line: "200" },
    { time: "12:45", destination: "Boden centrum", line: "100" },
    { time: "14:35", destination: "Boden centrum", line: "100", delay: 0 },
    { time: "16:10", destination: "Luleå", line: "200" },
    { time: "17:45", destination: "Boden centrum", line: "100" },
    { time: "19:00", destination: "Boden centrum", line: "100" },
    { time: "21:00", destination: "Boden centrum", line: "100", delay: 5 }
  ];

  // Filter to show only upcoming departures + add IDs
  return weekdaySchedule.map((dep, index) => {
    const [hours, minutes] = dep.time.split(":").map(Number);
    const depMinutes = hours * 60 + minutes;
    return {
      ...dep,
      id: index + 1,
      isPast: depMinutes < currentMinutes,
      isNext: false // Will be set below
    };
  }).map((dep, index, arr) => {
    // Mark the first non-past departure as "next"
    const firstUpcoming = arr.find(d => !d.isPast);
    return {
      ...dep,
      isNext: firstUpcoming && dep.id === firstUpcoming.id
    };
  });
}

// Tomorrow's schedule
export function getTomorrowDepartures() {
  return [
    { id: 1, time: "06:15", destination: "Boden centrum", line: "100" },
    { id: 2, time: "07:30", destination: "Luleå", line: "200" },
    { id: 3, time: "08:45", destination: "Boden centrum", line: "100" },
    { id: 4, time: "10:00", destination: "Boden centrum", line: "100" },
    { id: 5, time: "11:30", destination: "Luleå", line: "200" },
    { id: 6, time: "12:45", destination: "Boden centrum", line: "100" },
    { id: 7, time: "14:35", destination: "Boden centrum", line: "100" },
    { id: 8, time: "16:10", destination: "Luleå", line: "200" },
    { id: 9, time: "17:45", destination: "Boden centrum", line: "100" },
    { id: 10, time: "19:00", destination: "Boden centrum", line: "100" },
    { id: 11, time: "21:00", destination: "Boden centrum", line: "100" }
  ];
}

// Weekend schedule (reduced)
export function getWeekendDepartures() {
  return [
    { id: 1, time: "08:00", destination: "Boden centrum", line: "100" },
    { id: 2, time: "10:30", destination: "Luleå", line: "200" },
    { id: 3, time: "13:00", destination: "Boden centrum", line: "100" },
    { id: 4, time: "16:00", destination: "Luleå", line: "200" },
    { id: 5, time: "19:00", destination: "Boden centrum", line: "100" }
  ];
}

// Bus stop information
export const busStopInfo = {
  name: "Gunnarsbyn",
  number: "142",
  zone: "B"
};

// Get next N departures for sidebar display
export function getNextDepartures(count = 3) {
  const today = getTodayDepartures();
  const upcoming = today.filter(d => !d.isPast);
  return upcoming.slice(0, count);
}

// Format the last updated timestamp
export function getLastUpdated() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
}
