# React လိုတိုရှင်း

## ES6

var => function scope
let,const => block Scope
\*\*\* const is an object, can change object properties

`const user = { name: 'bob'};
user.name = 'Tom';`

### Map, Filter, Reduce

map() Function create a new array based on original array

`let nums = [1, 2, 3, 4];
let results = nums.map((n) => n + 1);
console.log(results);`
array item တစ်ခုချင်းစီမှာပေးလိုက်တဲ့ call back function အလုပ်လုပ်သွားပြီး array အသစ်တစ်ခုပြန်ရ

controlling Array instead use of for,for-in

### Arrow function

### Default Parameter Value and Rest Parameter

Default Parameter
`function add (a, b=0){
    return a + b;
}
add(1);`

Rest Parameter
`function add (a, b, ...c){
    return c;
}
add(1,2,3,4,5);`

### Spread Operator
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. 

`let alphas = [ 'a', 'b', 'c' ];
let nums = [1, 2, 3];
[ alphas, nums ]; // => [ ['a', 'b', 'c'], [1, 2, 3] ] 
[ ...alphas, ...nums ]; // => ['a', 'b', 'c', 1, 2, 3]`

### Destructuring
Array တွေ Object တွေကိုဖြည်ချလို့ရတဲ့လုပ်ဆောင်ချက်ပါ။

Array Destructure
`
let fruits = ['Apple', 'Orange'];
let [apple , orange] = fruits;

console.log(apple);
`

Object Destructuring
`
let user = { name: "Alice", age: 25 };
let { name, age } = user;

function show(user) {
  return `${user.name} is ${user.age} years old.`;
}

console.log(show(user));
`