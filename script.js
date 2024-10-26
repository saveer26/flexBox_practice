// create a function that adds a link to an element
// Two papramenters are : ElementId and Link
function addLink(link, elementId){
// Get the element by its id
  let element = document.getElementById(elementId);
//   crate A element
  let a = document.createElement("a");
// temperaly store inner HTML of the element
  let text = element.innerHTML;
//  clear the element's innerHTML
  element.innerHTML = "";
// set the link property of A element - href
  a.href = link;
// Put text inside a inner HTML
  a.innerHTML = text; 
// Add the Element as the child of the ElementID.
  element.appendChild(a);
}
addLink("https://en.wikipedia.org/wiki/United_States", "USA");
addLink("https://en.wikipedia.org/wiki/Japan", "Japan");
addLink("https://en.wikipedia.org/wiki/Finland", "Finland");
