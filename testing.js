// let nums = [1, 2, 3, 4];
// let results = nums.map((n) => n + 1);

// console.log(results);

// function add (a, b, ...c){
//     return c;
// }
// add(1,2,3,4,5);

let fruits = ['Apple', 'Orange'];
let [apple , orange] = fruits;

console.log(apple);

let user = { name: "Alice", age: 25 };
let { name, age } = user;

function show(user) {
  return `${user.name} is ${user.age} years old.`;
}

console.log(show(user));
