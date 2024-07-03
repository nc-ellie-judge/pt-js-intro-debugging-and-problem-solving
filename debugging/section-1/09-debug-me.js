function calculateAverageAge(tutors) {
  const total = tutors.reduce((sum, tutor) => {
    return sum + tutor.age;
  }, 0);

  const average = total / tutors.length;
  return average;
}

const tutors = [
  { name: "David", age: 31 },
  { name: "Ellie", age: 27 },
  { name: "Jim", age: 41 },
];

console.log(calculateAverageAge(tutors))
// should equal 33
