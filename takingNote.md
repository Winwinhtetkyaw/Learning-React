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

`let twice = n => n * 2;
let add = (a, b) => a + b;`

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

```
let alphas = [ 'a', 'b', 'c' ];
let nums = [1, 2, 3];
[ alphas, nums ]; // => [ ['a', 'b', 'c'], [1, 2, 3] ]
[ ...alphas, ...nums ]; // => ['a', 'b', 'c', 1, 2, 3]
```

### Destructuring

Array တွေ Object တွေကိုဖြည်ချလို့ရတဲ့လုပ်ဆောင်ချက်ပါ။

Array Destructure

```
let fruits = ['Apple', 'Orange'];
let [apple , orange] = fruits;

console.log(apple);
```

Object Destructuring

```
let user = { name: "Alice", age: 25 };
let { name, age } = user;

function show(user) {
    return `${user.name} is ${user.age} years old.`;
}

console.log(show(user));
```

String Interpolation

```
function show({ name, age }) {
return `${name} is ${age} years old.`; }
```

Class
javascript ဟာမူလဒီဇိုင်းအရ classical OOPမဟုတ်ပါ။
Object တွေတည်ဆောက်ဖို့အတွက် class တွေကိုမသုံးပဲ
object constructor and json တို့ကိုသုံးတယ်။

this keyword in javascript

1. The global object
2. As a method within an object
3. As a constructor on a function or class
4. As a dom event handler

Constructor
A special function that creates and initializes an object instance of a class.
a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.
Two types of constructor:

1. object constructor function

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var car1 = new Car('Chevy', 'Blazer', 2015);
var car2 = new Car('Ford', 'Taurus', 2018);

console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
// Output: Car 1 is a 2015 Chevy Blazer

console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);
// Output: Car 2 is a 2018 Ford Taurus
```

2. class constructor method

```
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

var car1 = new Car('Chevy', 'Blazer', 2015);
var car2 = new Car('Ford', 'Taurus', 2018);

console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
// Output: Car 1 is a 2015 Chevy Blazer

console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);
// Output: Car 2 is a 2018 Ford Taurus
```
