function calculateAverageAge(tutors) {
  const total = tutors.reduce((tutor, sum) => {
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

calculateAverageAge(tutors);
// should equal 33
