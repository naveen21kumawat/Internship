
const Name = "Naveen";
// Name = "Naveen Kumawat";  // This line would cause an error because Name is a constant
console.log(Name);
let Sum = (n1, n2) => {
  return n1 + n2;
};

console.log(Sum(10, 20));

const Person = {
  name: "Naveen",
  age: 19,
};
const { name, age } = Person;
console.log(name, age);

const array = [5, 6];

const [first, second] = array;
console.log(first, second);

array.map((item) => {
  console.log(item);
});

const newDtta = array.filter((item) => {
  return item > 5;
});
console.log(newDtta);

const newarray = [...array, 7, 8, 9];
console.log(newarray);

const newObject = { ...Person, city: "Jaipur" };
console.log(newObject);

// Combine use of filter and map

const nums = [1, 2, 3, 4, 5];
const doubledEvens = nums.filter(n => n % 2 === 0).map(n => n * 2);