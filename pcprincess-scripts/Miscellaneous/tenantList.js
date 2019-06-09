let tenants = new Map();

tenants.set('Unit 1', {
    firstName: 'Jimmy',
    lastName: 'Johnson',
    lease: true,
    workOrders: {}
});

let para = document.querySelector('p');
para.textContent = tenants;
//console.log(tenants);

// delete() to remove a key/value pair or clear() to remove all
// has() to check for existence and get() to retrieve a value

console.log(tenants.has('Unit 1'));
let value = tenants.get('Unit 1');
console.log(value);
let leaseValue = tenants.get('Unit 1').lease;
console.log(leaseValue);

let leaseFunc = function (unitParam) {
    return tenants.get(unitParam).lease;
};

console.log(leaseFunc('Unit 1'));

// Looping Through Maps

// First create another entry for my Map
tenants.set('Unit 2', {
    firstName: 'Amy',
    lastName: 'Klubachar',
    lease: true
});

// 3 WAYS to LOOP
//  1) Built-In 'MapIterator' Object returned via a call to: .keys() or .values()
// Once either keys() or values() is used (save to a VAR) the new VAR object
// can be used with .next() to receive each key or value in succession.
// 2) For-Of Loop to receive each key-value pair
// 3) The Map's .forEach() method to receive each key-value pair

let iter = tenants.keys(); // #1
console.log(iter.next());

for (const tenant of tenants) {  // #2
    console.log(tenant);
}

for (const [key, value] of tenants) { // Destructuring #2 for Keys Only
    console.log(key);
}

tenants.forEach((value2, key) => console.log(key, value2)); // #3



