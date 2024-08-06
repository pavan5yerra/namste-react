## What is TypeScript?
- TypeScript is a syntactic superset of JavaScript which adds **static typing**.
- This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add **types**.
## Why should I use TypeScript?
- JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
- In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
- TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
- For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
**TypeScript uses compile time type checking. This means it checks if the specified types match before running the code, not while running the code.**



## TypeScript Compiler
TypeScript is transpiled into JavaScript using a compiler.



## Configuring the compiler
The compiler can be configured using a `tsconfig.json` file.

```
Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```


CommonJS is a module system for JavaScript that was designed to allow the use of modules in server-side JavaScript applications. It provides a standardized way to structure and organize code by dividing it into smaller, reusable pieces called modules. CommonJS modules are widely used in Node.js.



**Node.js uses CommonJS as its default module system. Every file in a Node.js application is treated as a separate module.**







## DataTypes


There are three main primitives in JavaScript and TypeScript.

- `boolean`  - true or false values
- `number`  - whole numbers and floating point values
- `string`  - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

- `bigint`  - whole numbers and floating point values, but allows larger negative and positive numbers than the `number`  type.
- `symbol`  are used to create a globally unique identifier.
## Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit  `let firstName: string = "Dylan";` 
- Implicit  `let firstName = "Dylan";` 
**Note:** **Having TypeScript "guess" the type of a value is called infer.**



## Error In Type Assignment
```
//--> **JavaScript will not throw an error for mismatched
// types as it is implict.
**
let firstName: string = "Dylan"; // type string
firstName = 33; // attempts to re-assign the value to a different type
```
```
// Implicit any as JSON.parse doesn't know 
//what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, 
//but it can be a string or a number like this example
console.log(typeof json);
```


# TypeScript Special Types


**any **: 

- `any` is a type that disables type checking and effectively allows all types to be used.
- Setting `any` to the special type `any` disables type checking:


**unknown : **

- `unknown` is a similar, but safer alternative to `any`.
- `unknown`  is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
- Casting is when we use the "as" keyword to say property or variable is of the casted type.


**never : **

- `never` effectively throws an error whenever it is defined.
```
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
```
**undefined & null :**

- `undefined` and `null` are types that refer to the JavaScript primitives `undefined` and `null` respectively.


**Arrays **: 

```
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number'
// is not assignable to parameter of type 'string'.

// -> Readonly Array
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type
// 'readonly string[]'.
// try removing the readonly modifier and see if it works?
```


**Tuples **: 

- A **tuple** is a typed [﻿array](https://www.w3schools.com/js/js_arrays.asp) with a pre-defined length and types for each index.
- Tuples are great because they allow each element in the array to be a known type of value.
```
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];
```


```

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
```


**Objects **: 

```
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```
```
//optional property
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;
```
```
//--> Index Signature
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
```


**Enum **: 

- An **enum** is a special "class" that represents a group of constants (unchangeable variables).
```
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
```
```
//--> Initializing enum by default

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
```


**Aliases **: 

```
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
```


**Interfaces**:

```typescript
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
```
```
//-> extending interfaces
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
```


**union **: 

- Using the `|` we are saying our parameter is a `string` or `number`:
```
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
```




## TypeScript Functions
- TypeScript has a specific syntax for typing function parameters and return values.
```
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

//void return type
function printHello(): void {
  console.log('Hello!');
}

// paramaters
function multiply(a: number, b: number) {
  return a * b;
}

//optional parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

//Default parameters
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

//rest parameters
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
```


**Type Casting** : 

```
let x: unknown = 'hello';
console.log((x as string).length);

let x: unknown = 'hello';
console.log((<string>x).length);

//force casting
let x = 'hello';
console.log(((x as unknown) as number).length);
```


**Generics **: 

- Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
```
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]
```


**Partial **: 

```
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
```


**Required **:

```
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};
```


