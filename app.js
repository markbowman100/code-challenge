// - Get the AVERAGE "totalPoints" of ALL OF ALL STARS
// - A ALL STAR is defined as a player with averaging a minimum of 20 points per each game played
// - DO  NOT TO CHANGE the original response from the API
// - DO NOT USE FOR LOOPS
// - The API response is as follows:
const players = [
  {
    id: 1,
    name: "Erick Knaebel",
    gamesPlayed: 6,
    totalPoints: 120,
  },
  {
    id: 2,
    name: "MArk Bowman",
    gamesPlayed: 8,
    totalPoints: 165,
  },
  {
    id: 3,
    name: "Karthick Ghandi",
    gamesPlayed: 12,
    totalPoints: 120,
  },
  {
    id: 4,
    name: "Rameez Ahmed",
    gamesPlayed: 13,
    totalPoints: 33,
  },
  {
    id: 5,
    name: "James Spencer",
    gamesPlayed: 19,
    totalPoints: 63,
  },
  {
    id: 6,
    name: "Prerna Prasad",
    gamesPlayed: 12,
    totalPoints: 22,
  }
];

const allStarGameData = players.filter((value, index, array) => {
  return (value.totalPoints / value.gamesPlayed) >= 20;
})
.reduce((accumulator, currentValue, currentIndex, array) => {
  accumulator.totalPoints = accumulator.totalPoints + currentValue.totalPoints,
  accumulator.gamesPlayed = accumulator.gamesPlayed + currentValue.gamesPlayed
  return accumulator;
}, {totalPoints: 0, gamesPlayed: 0});

const averageOfAllStars = (allStarGameData.totalPoints / allStarGameData.gamesPlayed);

console.log(averageOfAllStars);