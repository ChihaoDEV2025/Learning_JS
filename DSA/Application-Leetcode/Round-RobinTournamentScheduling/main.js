function generateMinimalMatchSchedule2D(numPlayers) {
  const allMatches = [];

  // Step 1: Generate all unique matchups
  for (let i = 0; i < numPlayers; i++) {
    for (let j = i + 1; j < numPlayers; j++) {
      allMatches.push([i, j]);
    }
  }

  const schedule = [];

  // Step 2: Distribute matches over days (minimize matches/day)
  while (allMatches.length > 0) {
    const day = [];
    const playedToday = new Set();

    for (let i = 0; i < allMatches.length; ) {
      const [a, b] = allMatches[i];

      if (!playedToday.has(a) && !playedToday.has(b)) {
        day.push([a, b]);
        playedToday.add(a);
        playedToday.add(b);
        allMatches.splice(i, 1); // remove matched pair
      } else {
        i++;
      }
    }

    schedule.push(day); // one row = one day
  }

  return schedule;
}

// Example: 6 players
const numPlayers = 6;
const schedule = generateMinimalMatchSchedule2D(numPlayers);

// Display 2D array
console.log("Match Schedule (2D Array):");
console.log(schedule);

// Optional: formatted output
schedule.forEach((day, i) => {
  console.log(`Day ${i + 1}:`);
  day.forEach(([a, b]) => {
    console.log(`  Player ${a} vs Player ${b}`);
  });
});
