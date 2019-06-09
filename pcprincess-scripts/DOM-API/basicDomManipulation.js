// *******************************************************************
// Accessing HTML Elements and/or Storing References to HTML Elements
// *******************************************************************


// Newest Method and Examples
document.querySelector();

let aLink = document.querySelector('a');
// Use It
aLink.textContent = 'I\'m the text for the underlined link';
aLink.href = "https://thisIsTheURL.com";
// Complex Example
// Note The Following HTML:
//<div class="user-panel main">
//    ...
//  <input name="login" />
//</div>
// Use It
let complex = document.querySelector("div.user-panel.main input[name='login']");

// Older Methods and Examples

document.getElementById();

let refByID = document.getElementById('anID');
// Use It
refByID.innerText = "I'm text associated with a paragraph that had the correct ID.";

document.getElementsByTagName();

let refByTag = document.getElementsByTagName('p');
// Use It
if (refByTag.length === 0) {
  alert("There are no more paragraphs in this document.");
}

// *******************************************************************
// Creating and Placing New Nodes
// *******************************************************************

document.createElement();
document.createTextNode();
node.appendChild();

let para = document.createElement('p');
// Use It
para.textContent = "Some text for the paragraph.";
// Attach It to A Different Element
let sect = document.querySelector('section');
sect.appendChild(para);
let space = document.createTextNode(' ');
let moreText = document.createTextNode('A sentence goes here.');
// Attach Text Nodes to the Paragraph
para.appendChild(space).appendChild(moreText); // Is Possible?

// *******************************************************************
// Moving and Removing Elements
// *******************************************************************

node.appendChild();  // Used Above
node.removeChild();
node.cloneNode();

para.removeChild(moreText);

// How to Remove a Node w/Only a Reference to Itself
node.parentNode.removeChild(node);













