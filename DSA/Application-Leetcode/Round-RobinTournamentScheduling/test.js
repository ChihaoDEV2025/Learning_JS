function pairTeams(numberOfTeams) {
  let AllMatches = [];

  //Get all matches (0-1 , 0-2, 0-3,...)
  for (let i = 0; i < numberOfTeams; i++) {
    for (let j = i + 1; j < numberOfTeams; j++) {
      AllMatches.push([i, j]);
    }
  }

  //declare schedule to contains matches day
  let schedule = [];
  //
  while (AllMatches.length > 0) {
    let day = [];
    let playedTeam = new Set();

    for (let i = 0; i < AllMatches.length; ) {
      //Pay attention here
      let [a, b] = AllMatches[i];
      if (!playedTeam.has(a) && !playedTeam.has(b)) {
        day.push([a, b]);
        playedTeam.add(a);
        playedTeam.add(b);
        AllMatches.splice(i, 1);

        --i; //avoid skipping
      } else {
        i++;
      }
    }
    schedule.push(day);
  }

  return schedule;
}

// Example: 6 players
const numPlayers = 6;
const schedule = pairTeams(numPlayers);

// Display 2D array
console.log("Match Schedule (2D Array):");
console.log(schedule);

// Optional: formatted output
schedule.forEach((day, i) => {
  console.log(`Day ${i}: `);
  day.forEach(([a, b]) => {
    console.log(`Team ${a} vs Team ${b}`);
  });
});
