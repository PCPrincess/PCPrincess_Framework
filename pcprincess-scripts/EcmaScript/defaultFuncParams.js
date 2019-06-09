// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to IceCream
IceCream.prototype.addScoop = function () {
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

// Default Function Parameters (ES6)
function greet(name = 'Student', greeting = 'Welcome'){
  console.log(`${greeting} ${name}!`);
}

greet();
greet('James');

function greetTwo(name = 'Student', greeting = 'Welcome'){
  return `${greeting} ${name}!`;
  // Note: The 'return' statement will NOT print out to console
  // We had to 'call' the greetTwo function and USE it w/console.log()
  // in order to 'see' the results printed to console.
  // A 'return' will not PRINT the results to console by itself.
}

let testGreeting = function () {
  console.log(greetTwo());
};

testGreeting();

