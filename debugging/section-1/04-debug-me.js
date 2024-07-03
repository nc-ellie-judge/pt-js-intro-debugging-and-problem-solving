function findMentorsFavouritePlant(mentor) {
  const plants = {
    Rob: "Money Plant",
    Hannah: "Sunflower",
    Lewis: "Cactus",
    Harrison: "Venus Fly Trap",
  };
  return plants[mentor]
}

console.log(findMentorsFavouritePlant("Rob")); // should return "Money Plant"
console.log(findMentorsFavouritePlant("Lewis")); // should return "Cactus"
