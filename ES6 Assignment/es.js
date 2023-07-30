//LET, VAR & CONST:
//QUESTION 1
const PI = 3.14159;
console.log(PI); // Output: 3.14159
//QUESTION 2
function sumOfSquares(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] * numbers[i];
      sum += square;
    }
    return sum;
  }
  const numbersArray = [1, 2, 3, 4];
  console.log(sumOfSquares(numbersArray)); // Output: 30 (1^2 + 2^2 + 3^2 + 4^2 = 30)\
//QUESTION 3
const stringsArray = ["apple", "banana", "cherry"];
for (let i = 0; i < stringsArray.length; i++) {
  let firstLetter = stringsArray[i][0];
  console.log(firstLetter);
}// Output: "a", "b", "c"
//QUESTION 4
const ASTERISK = '*';
function generateAsterisks(n) {
  return ASTERISK.repeat(n);
}
console.log(generateAsterisks(5)); // Output: "***"
//QUESTION 5
function generateGreeting(personData) {
    const greetingMessage = `Hello, my name is ${personData.name} and I am ${personData.age} years old.`;
    return greetingMessage;
  }

  const personObject = { name: "Hani", age: 20 };
  console.log(generateGreeting(personObject)); // Output: "Hello, my name is Hani and I am 20 years old."
//QUESTION 6
function findMaxValue(numbers) {
    let max = Math.max(...numbers);
    return max;
  }
  const numbersArray2 = [10, 5, 7, 25, 15];
  console.log(findMaxValue(numbersArray2)); // Output: 25
  
  //TEMPLATE STRINGS:
  //Question 1
  function greetPerson(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  const name = "Hani";
  const age = 20;
  console.log(greetPerson(name, age)); // Output: "My name is Hani and I am 20 years old."
  //Question 2
  function sumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return `Sum: ${sum}, Average: ${average.toFixed(2)}`;
  }
  const numberArray = [1, 2, 3, 4, 5];
  console.log(sumAndAverage(numberArray)); // Output: "Sum: 15, Average: 3.00"
  //Question 3
  function createHTMLElement(tag, text) {
    return `<${tag}>${text}</${tag}>`;
  }
  const tagName = "h1";
  const elementText = "Hello, World!";
  console.log(createHTMLElement(tagName, elementText));// Output: "<h1>Hello, World!</h1>"  
  //Question 4
  function getProductInfo(product) {
    return `Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`;
  }
  const productObject = { name: "Widget", price: 9.99, quantity: 10 };
  console.log(getProductInfo(productObject));// Output: "Product: Widget, Price: $9.99, Quantity: 10"
  //Question 5
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const currentDate = new Date();
  console.log(formatDate(currentDate)); // Output: e.g., "28/07/2023"
  
  //DESTRUCTING:
  //Question 1
  function sumTwoNumbers(numbers) {
    const [num1, num2] = numbers;
    return num1 + num2;
  }
  const numbArray = [5, 7];
  console.log(sumTwoNumbers(numbArray)); // Output: 12
  //Question 2
  function getPersonInfo(person) {
    const { name, age, occupation } = person;
    return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  } 
  const personss = { name: "Hani", age: 20, occupation: "Engineer" };
  console.log(getPersonInfo(personss)); // Output: "Name: Hani, Age: 20, Occupation: Engineer"
  //Question 3
  function getHighestScorer(people) {
    const [highestScorer, ...rest] = people.sort((a, b) => b.score - a.score);
    return highestScorer.name;
  }
  const pplArray = [
    { name: "Atrooba", score: 85 },
    { name: "Bibi", score: 92 },
    { name: "Zara", score: 78 },
  ];
  console.log(getHighestScorer(pplArray)); // Output: "Bibi"  
  //Question 4
  function getPersonInitials(person) {
    const { firstName, lastName, middleName = "" } = person;
    return `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
  }
  const personObject2 = { firstName: "Muhammad", lastName: "Taha" };
  console.log(getPersonInitials(personObject2)); // Output: "MT"
  //Question 5
  function getFirstAndLastElements(arr) {
    const [first, ...rest] = arr;
    const last = rest.pop();
    return { first, last };
  }
  const stringArray = ["apple", "banana", "cherry", "date"];
  console.log(getFirstAndLastElements(stringArray));// Output: { first: "apple", last: "date" }


  // DEFAULT, REST & SPREAD

// QUESTION#1
const sumNumbers = (num1 = 0, num2 = 0) => num1 + num2;

function calculateSum() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = sumNumbers(num1, num2);
  document.getElementById('result1').textContent = result;
}

// QUESTION#2
function getArguments(...args) {
  return args;
}

function displayArguments() {
  const argumentsArray = getArguments(1, 'hello', true, [1, 2, 3]);
  document.getElementById('result2').textContent = JSON.stringify(argumentsArray);
}

// QUESTION#3
function calculate() {
  const userInput = document.getElementById('numberInput').value;
  const numberValue = parseFloat(userInput);
  document.getElementById('result3').textContent = numberValue;
}

// QUESTION#4
function concatenateArrays() {
  const array1 = document.getElementById('array1Input').value.split(',').map(item => parseFloat(item.trim()));
  const array2 = document.getElementById('array2Input').value.split(',').map(item => parseFloat(item.trim()));

  if (array1.some(isNaN) || array2.some(isNaN)) {
    document.getElementById('result4').textContent = "Invalid input, please enter valid arrays of numbers.";
  } else {
    const resultArray = [...array1, ...array2];
    document.getElementById('result4').textContent = resultArray.toString();
  }
}

// QUESTION#5
function addIdToObject(person) {
  const id = generateUniqueId(); 
  return { ...person, id };
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

function processInput(event) {
  event.preventDefault();

  const name = "Hani"; // Updated name
  const age = 20; // Updated age
  const occupation = document.getElementById('occupationInput').value;

  const inputObject = { name, age, occupation };
  const resultObject = addIdToObject(inputObject);

  document.getElementById('result5').textContent = JSON.stringify(resultObject, null, 2);
}

////Arrow Function
const numbers = [1, 2, 3, 4, 5];

console.log("Using Arrow Function and forEach():");
numbers.forEach((element) => {
  console.log(element * 2);
});

const doubledNumbers = numbers.map((element) => element * 2);

console.log("\nUsing Arrow Function and map():");
console.log(doubledNumbers);

function getStringLength(str) {
  return str.length;
}

function calculateLength(event) {
  event.preventDefault();

  const inputString = document.getElementById('stringInput').value;
  const length = getStringLength(inputString);

  document.getElementById('result').textContent = length;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function multiplyNumbers(event) {
  event.preventDefault();

  const num1 = parseFloat(document.getElementById('number1Input').value);
  const num2 = parseFloat(document.getElementById('number2Input').value);

  const product = multiply(num1, num2);

  document.getElementById('prdct').textContent = product;
}

function calculateAverage() {
  const numbersInput = document.getElementById('numbersInput').value;
  const average = calculateAverageFromString(numbersInput);

  document.getElementById('avg').textContent = average;
}

function calculateAverageFromString(numbers) {
  const numberArray = numbers.split(',').map(num => parseFloat(num.trim()));
  if (numberArray.length === 0 || numberArray.some(isNaN)) return 0;
  const sum = numberArray.reduce((total, num) => total + num, 0);
  return sum / numberArray.length;
}

const greet = (name) => {
  return `Hello, ${name}!`;
};

// const greetButton = document.getElementById('greet-button');
// greetButton.addEventListener('click', () => {
//   const nameInput = document.getElementById('name-input');
//   const name = nameInput.value.trim();

//   if (name) {
//     const greeting = greet(name);
//     const greetingContainer = document.getElementById('greeting-container');
//     greetingContainer.innerHTML = `<p>${greeting}</p>`;
//   } else {
//     alert("Please enter a valid name.");
//   }
// });

// const getRandomNumber = () => Math.random();

// const generateButton = document.getElementById('generate-button');
// const randomNumberDisplay = document.getElementById('random-number');

// generateButton.addEventListener('click', () => {
//   const randomNumber = getRandomNumber();
//   randomNumberDisplay.textContent = `Random Number: ${randomNumber}`;
// });

// QUESTION#1
function squareAfterDelay(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof number === 'number') {
          const square = number * number;
          resolve(square);
        } else {
          reject(new Error('Invalid input: The parameter must be a number.'));
        }
      }, 1000);
    });
  }
  
  const calculateButton = document.getElementById('calculate-button');
  const resultElement = document.getElementById('sqr');
  
  calculateButton.addEventListener('click', () => {
    const numberInput = document.getElementById('number-input').value;
    const number = parseFloat(numberInput);
  
    squareAfterDelay(number)
      .then((result) => {
        resultElement.textContent = `The square of ${number} is: ${result}`;
      })
      .catch((error) => {
        resultElement.textContent = error.message;
      });
  });
  
  // QUESTION#2
  function resolvePromises(promisesArray) {
    return Promise.all(promisesArray);
  }
  
  function resolveUserPromises() {
    const inputElement = document.getElementById("promises");
    const userInput = inputElement.value.trim();
  
    if (userInput.length === 0) {
      alert("Please enter promises separated by commas.");
      return;
    }
  
    const userPromises = userInput.split(",").map(p => new Promise(resolve => resolve(p.trim())));
  
    resolvePromises(userPromises)
      .then((results) => {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `<p>Resolved Values: ${JSON.stringify(results)}</p>`;
      })
      .catch((error) => {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `<p>Error occurred: ${error}</p>`;
      });
  }
  
  // QUESTION#3
  function fetchAndParseJSON(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      });
  }
  
  // QUESTION#4
  function sumOfResolvedValues(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then((results) => {
        const [value1, value2] = results;
        return value1 + value2;
      });
  }
  
  function calculateSum() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
  
    if (isNaN(value1) || isNaN(value2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const promise1 = Promise.resolve(value1);
    const promise2 = Promise.resolve(value2);
  
    sumOfResolvedValues(promise1, promise2)
      .then((sum) => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Sum: ${sum}</p>`;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // QUESTION#5
  function promiseWithTimeout(originalPromise, timeout) {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Promise timed out"));
      }, timeout);
    });
  
    return Promise.race([originalPromise, timeoutPromise]);
  }
  
  function runPromiseWithTimeout() {
    const timeoutInput = parseInt(document.getElementById("timeoutInput").value, 10);
  
    if (isNaN(timeoutInput) || timeoutInput <= 0) {
      alert("Please enter a valid positive timeout value (in milliseconds).");
      return;
    }
  
    const promise = new Promise((resolve) => setTimeout(() => resolve("Promise resolved"), 2000));
  
    promiseWithTimeout(promise, timeoutInput)
      .then((result) => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>Result: ${result}</p>`;
      })
      .catch((error) => {
        const resultDiv = document.getElementById("prmtimeout");
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  
  // QUESTION#6
  const startCountingPromise = new Promise((resolve) => {
    resolve("Start Counting");
  });
  function counter(value) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${value}</p>`;
  }
  
  startCountingPromise
    .then((result) => {
      counter(result);
      return 1;
    })
    .then((value) => {
      counter(value);
      return value + 1;
    })
    .then((value) => {
      counter(value);
      return value + 1;
    })
    .then((value) => {
      counter(value);
    });
  /////  MAPS ///////

/// QUESTION 1//////

const squareMap = (numbers) => {
    const result = new Map();
  
    for (const number of numbers) {
      const square = number * number;
      result.set(number, square);
    }
  
    return result;
  };
  
  // Test the function
  const numArray = [1, 2, 3, 4, 5];
  const resultMap1 = squareMap(numArray);
  console.log(resultMap1); // Output: Map { 1 => 1, 2 => 4, 3 => 9, 4 => 16, 5 => 25 }
  
/// QUESTION 2//////

const mapNamesToAges = (people) => {
    const result = new Map();
  
    for (const person of people) {
      const { name, age } = person;
      result.set(name, age);
    }
  
    return result;
  };
  
  // Test the function
  const peopleArray = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 27 },
  ];
  
  const resultMap = mapNamesToAges(peopleArray);
  console.log(resultMap);
  // Output: Map { 'Alice' => 25, 'Bob' => 30, 'Charlie' => 22, 'David' => 27 }


  /// QUESTION 3//////
  
  const hasKeyInMap = (map, key) => {
    // Using the Map's built-in 'has' method to check if the key exists in the map
    return map.has(key);
  };
  
  // Test the function
  const myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]);
  
  console.log(hasKeyInMap(myMap, 'b')); // Output: true
  console.log(hasKeyInMap(myMap, 'd')); // Output: false
  

/// QUESTION 4//////

const filterMapByCallback = (map, callback) => {
    // Using the Map and Object.fromEntries to create a new map with filtered key-value pairs
    const filteredEntries = [...map.entries()].filter(([key, value]) => callback(key, value));
    const filteredMap = new Map(filteredEntries);
    return filteredMap;
  };
  
  // Test the function
  const myMap1 = new Map([
    ['apple', 5],
    ['banana', 10],
    ['orange', 8],
    ['grapes', 15],
  ]);
  
  const filteredMap = filterMapByCallback(myMap1, (key, value) => value > 8);
  console.log(filteredMap);
  // Output: Map { 'banana' => 10, 'grapes' => 15 }
  

/// QUESTION 5//////

const mergeMaps = (map1, map2) => {
    // Creating a new map to hold the merged key-value pairs
    const mergedMap = new Map();
  
    // Adding key-value pairs from the first map to the merged map
    for (const [key, value] of map1) {
      mergedMap.set(key, value);
    }
  
    // Adding or overwriting key-value pairs from the second map to the merged map
    for (const [key, value] of map2) {
      mergedMap.set(key, value);
    }
  
    return mergedMap;
  };
  
  // Test the function
  const map1 = new Map([
    ['a', 1],
    ['b', 2],
  ]);
  
  const map2 = new Map([
    ['b', 3],
    ['c', 4],
  ]);
  
  const mergedMap = mergeMaps(map1, map2);
  console.log(mergedMap);
  // Output: Map { 'a' => 1, 'b' => 3, 'c' => 4 }
  

  ////  CLASSES //////

  /// QUESTION 2 //////


// Step a: Create a class for Person including the constructor for firstname and lastname.
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const friend1 = new Person('Hani', 'Hussain');
  
  const friend2 = new Person('Erum', 'Samia');
  
  // Step d: Output both friends into the console with a greeting of hello.
  console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
  console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);
  
/// QUESTION 3 //////

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     introduction() {
//       return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
//     }
//   }
  
//   // Test the class
//   const person1 = new Person('Alice', 25);
//   console.log(person1.introduction()); // Output: Hi, my name is Alice, and I am 25 years old.
  
//   const person2 = new Person('Bob', 30);
//   console.log(person2.introduction()); // Output: Hi, my name is Bob, and I am 30 years old.
  

  /// QUESTION 4 //////

  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate the area of the rectangle
    getArea() {
      return this.width * this.height;
    }
  
    // Method to calculate the perimeter of the rectangle
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Test the class
  const rectangle1 = new Rectangle(5, 10);
  console.log('Area:', rectangle1.getArea()); // Output: Area: 50
  console.log('Perimeter:', rectangle1.getPerimeter()); // Output: Perimeter: 30
  
  const rectangle2 = new Rectangle(7, 3);
  console.log('Area:', rectangle2.getArea()); // Output: Area: 21
  console.log('Perimeter:', rectangle2.getPerimeter()); // Output: Perimeter: 20
  
/// QUESTION 6 //////


class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Method to calculate and return the diameter of the circle
    getDiameter() {
      return 2 * this.radius;
    }
  
    // Method to calculate and return the circumference of the circle
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Method to calculate and return the area of the circle
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Test the class
  const circle1 = new Circle(5);
  console.log('Diameter:', circle1.getDiameter()); // Output: Diameter: 10
  console.log('Circumference:', circle1.getCircumference()); // Output: Circumference: 31.41592653589793
  console.log('Area:', circle1.getArea()); // Output: Area: 78.53981633974483
  
  const circle2 = new Circle(7);
  console.log('Diameter:', circle2.getDiameter()); // Output: Diameter: 14
  console.log('Circumference:', circle2.getCircumference()); // Output: Circumference: 43.982297150257104
  console.log('Area:', circle2.getArea()); // Output: Area: 153.93804002589985
  

/// QUESTION 6//////

class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduction() {
      return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, course) {
      // Call the parent class's constructor using super
      super(name, age);
      this.course = course;
    }
  
    // Override the introduction method of the parent class
    introduction() {
      return `Hi, my name is ${this.name}, and I am ${this.age} years old. I am a student studying ${this.course}.`;
    }
  }
  
  // Test the classes
  const student1 = new Student('Alice', 20, 'Computer Science');
  console.log(student1.introduction());
  // Output: Hi, my name is Alice, and I am 20 years old. I am a student studying Computer Science.
  
  const student2 = new Student('Bob', 22, 'Physics');
  console.log(student2.introduction());
  // Output: Hi, my name is Bob, and I am 22 years old. I am a student studying Physics.
  



/// QUESTION 7 //////

class Rectangle1 {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
  
    getArea() {
      return this.width ** 2;
    }
  
    getPerimeter() {
      return 4 * this.width;
    }
  }
  
  // Test the classes
  const square1 = new Square(5);
  console.log('Area:', square1.getArea()); // Output: Area: 25
  console.log('Perimeter:', square1.getPerimeter()); // Output: Perimeter: 20
  
  const square2 = new Square(7);
  console.log('Area:', square2.getArea()); // Output: Area: 49
  console.log('Perimeter:', square2.getPerimeter()); // Output: Perimeter: 28
  

/////HOISTING///////


///// QUESTION 1///////
function printVariable() {
    console.log(myVar); // Output: undefined
    var myVar = 5;
    console.log(myVar); // Output: 5
  }
  
  printVariable();
  


///// QUESTION 2///////

// function printValue() {
//     let myVar = 'Hello';
//     console.log(myVar); // Output: Hello
//   }
  
//   printValue();
//   console.log(myVar); // This will result in an error
  

///// QUESTION 3///////

// function printValue() {
//     const myVar = 'Hello';
//     console.log(myVar); // Output: Hello
//   }
  
//   printValue();
//   console.log(myVar); // This will result in an error
  



///// QUESTION 4///////

// function printValue() {
//     console.log(undeclaredVar); // This will result in an error
//   }
  
//   printValue();
  

  //// QUESTION 5///////

// Function declaration
function foo() {
    console.log("Hello from foo!");
  }
  
  function callFoo() {
    foo(); // Calling the function declared below
  }
  
  callFoo(); // Output will be "Hello from foo!"
  


  ///// THIS KEY WORD /////


//// QUESTION 1///////

const person = {
    name: "John",
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person.greet(); // Output will be "Hello, my name is John."
  


//// QUESTION 2///////

function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      console.log(`Current speed of ${this.brand} car: ${this.speed} km/h`);
    };
  }
  
  // Creating an instance of Car
  const myCar = new Car("Toyota");
  
  // Using the methods
  myCar.accelerate(30);
  myCar.printSpeed(); // Output: "Current speed of Toyota car: 30 km/h"
  
  myCar.accelerate(20);
  myCar.printSpeed(); // Output: "Current speed of Toyota car: 50 km/h"
  


//// QUESTION 3///////

const calculator = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Using the methods
  calculator.add(10);
  calculator.printValue(); // Output: "Current value: 10"
  
  calculator.subtract(5);
  calculator.printValue(); // Output: "Current value: 5"
  
  calculator.multiply(2);
  calculator.printValue(); // Output: "Current value: 10"
  

//// QUESTION 4///////
const calculator1 = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Using the methods
  calculator.add(10);
  calculator.printValue(); // Output: "Current value: 10"
  
  calculator.subtract(5);
  calculator.printValue(); // Output: "Current value: 5"
  
  calculator.multiply(2);
  calculator.printValue(); // Output: "Current value: 10"
  

//// QUESTION 5///////

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
  
    printInfo: function() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Number of Pages: ${this.pages}`);
    }
  };
  
  // Using the printInfo method
  book.printInfo();
  




//// QUESTION 6///////


const counter = {
    count: 0,
  
    increment: function() {
      this.count += 1;
    },
  
    reset: function() {
      this.count = 0;
    }
  };
  
  // Using the methods
  counter.increment();
  console.log(counter.count); // Output: 1
  
  counter.increment();
  console.log(counter.count); // Output: 2
  
  counter.reset();
  console.log(counter.count); // Output: 0
  


//// QUESTION 7///////

const product = {
    name: "Laptop",
    price: 1000,
    discount: 0.1, // 10% discount
  
    calculateDiscountedPrice: function() {
      return this.price - (this.price * this.discount);
    }
  };
  
  // Using the calculateDiscountedPrice method
  const discountedPrice = product.calculateDiscountedPrice();
  console.log(discountedPrice); // Output: 900
  


//// QUESTION 8///////

const game = {
    playerName: "Hani",
    score: 0,
  
    play() {
      // Your game logic here
      console.log(`${this.playerName} is playing the game.`);
      this.score += 10;
      console.log(`Score: ${this.score}`);
    }
  };
  
  game.play(); // Output: "Hani is playing the game." and "Score: 10
