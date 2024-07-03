function findKnownFlyers(superheroes) {
  const knownFlyers = [];

  for (let i = 0; i < superheroes.length; i++) {
    if (superheroes[i].ability === "flying" && !superheroes[i].isAnonymous) {
      knownFlyers.push(superheroes[i]);
    }
  }
  return knownFlyers;
}

const heroes = [
  { name: "Ironman", ability: "flying", isAnonymous: false }, // 
  { name: "Spiderman", ability: "spidey-sense", isAnonymous: true },
  { name: "Superman", ability: "flying", isAnonymous: true },
  { name: "Batman", ability: "Has VERY low voice", isAnonymous: true },
  { name: "Wonderwoman", ability: "flying", isAnonymous: false }, //
  { name: "Shazam", ability: "flying", isAnonymous: true },
];
console.log(findKnownFlyers(heroes))

//should return
// [
//   { name: "Ironman", ability: "flying", isAnonymous: false },
//   { name: "Wonderwoman", ability: "flying", isAnonymous: false },
// ];
