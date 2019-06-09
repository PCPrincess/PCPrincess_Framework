// GOAL:
// Add Items to the List Dynamically Via the Input

let uList = document.querySelector('ul');
let inputVar = document.querySelector('input');
let buttonVar = document.querySelector('button');

buttonVar.onclick = function () {
  let eleValue = inputVar.value;
  inputVar.value = " ";

  let listItem = document.createElement('li');
  let newSpan = document.createElement('span');
  let newButton = document.createElement('button');

  listItem.appendChild(newSpan);
  listItem.appendChild(newButton);
  newSpan.textContent = eleValue;
  newButton.textContent = "Delete";

  uList.appendChild(listItem);

  newButton.onclick = function (e) {
    uList.removeChild(listItem);
  };

  inputVar.focus();
};
// Remember - NO Parenthesis after onclick (WhY?)
// WhY? - onclick is NOT called immediately - it is SET to function () {}




