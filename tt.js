function stepOne() {
  return "Start";
}

function stepTwo(prev) {
  return prev + " -> Middle";
}

function stepThree(prev) {
  return prev + " -> End";
}

console.log(stepOne());
console.log("Middle");
console.log("End");

function first() {
  console.log("First function called");
  second();
  console.log("First function finished");
}

function second() {
  console.log("Second function executing");
}

first();

let a = 10 + 5;
let b = a * 2;
console.log("Calculation 1:", a);
console.log("Calculation 2:", b);

let result = stepThree(stepTwo(stepOne()));
console.log("Flow result:", result);


console.log("Hello");
setTimeout(() => {
  console.log("World");
}, 2000);

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

console.log("Loading...");
setTimeout(() => {
  console.log("Done");
}, 3000);

function sendDelayedMessage(msg, delay) {
  setTimeout(() => {
    console.log("Delayed Message:", msg);
  }, delay);
}

sendDelayedMessage("System operational", 1500);


console.log("1: Start");
setTimeout(() => {
  console.log("2: Async Timeout");
}, 1000);
console.log("3: End");

console.log("A: Sync Start");
setTimeout(() => {
  console.log("B: Timeout 0ms");
}, 0);
console.log("C: Sync End");

console.log("Line 1");
setTimeout(() => {
  console.log("Line 2 (Async)");
}, 0);
console.log("Line 3");

function heavyLoop() {
  console.log("Callstack busy start");
  setTimeout(() => {
    console.log("Task Queue callback executed");
  }, 0);
  for (let i = 0; i < 1e7; i++) {}
  console.log("Callstack empty now");
}

heavyLoop();


function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greet("Belal", () => {
  console.log("Welcome to the platform!");
});

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log("Add:", calculate(5, 3, add));
console.log("Multiply:", calculate(5, 3, multiply));

function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data loaded successfully");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});

function login(username, callback) {
  console.log("Logging in user: " + username);
  setTimeout(() => {
    let success = true;
    callback(success);
  }, 1000);
}

login("Belal", (isSuccess) => {
  if (isSuccess) {
    console.log("Login Successful!");
    console.log("Redirecting to Dashboard...");
  }
});