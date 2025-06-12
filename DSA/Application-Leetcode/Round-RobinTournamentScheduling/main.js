function generateMinimalMatchSchedule2D(numPlayers) {
  const schedule = [];
  const n = numPlayers;
  const isOdd = n % 2 !== 0;
  const numDays = isOdd ? n : n - 1;
  const players = Array.from({ length: n }, (_, i) => i);

  // Handle odd number of players by adding a dummy player
  if (isOdd) players.push(-1); // -1 represents no match (bye)

  const m = players.length; // m = n for even n, n+1 for odd n

  // Circle method: fix player 0, rotate others
  for (let day = 0; day < numDays; day++) {
    const dayMatches = [];
    for (let i = 0; i < m / 2; i++) {
      const p1 = players[i];
      const p2 = players[m - 1 - i];
      // Skip dummy player (-1)
      if (p1 !== -1 && p2 !== -1) {
        dayMatches.push([p1, p2]);
      }
    }
    schedule.push(dayMatches);

    // Rotate players: move last to front, shift others right
    const last = players.pop();
    players.splice(1, 0, last);
  }

  return schedule;
}

// Example: 6 players
const numPlayers = 6;
const schedule = generateMinimalMatchSchedule2D(numPlayers);

// Display 2D array
console.log("Match Schedule (2D Array):");
console.log(schedule);

// Formatted output
schedule.forEach((day, i) => {
  console.log(`Day ${i + 1}:`);
  day.forEach(([a, b]) => {
    console.log(`  Player ${a} vs Player ${b}`);
  });
});
