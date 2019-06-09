// Default Array Parameter
function create2ndGrid([width = 5, height = 5] = []) {
  return `Generates a grid with width: ${width} and height: ${height}`;
} // The function can be called without an array parameter due to the 2nd default.

let gridThree = () => console.log(create2ndGrid());
gridThree();

// Default Object Parameter
function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

let dessert = () => console.log(createSundae());
dessert();