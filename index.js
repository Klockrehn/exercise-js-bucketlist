// Step 1: Create a <p> with "Travel to USA" and append it to the body
const firstItem = document.createElement("p");
firstItem.innerText = "Travel to USA";
document.body.appendChild(firstItem);

// Step 2: Create another <p> with "Skydive" and insert it after the first <p>
const secondItem = document.createElement("p");
secondItem.innerText = "Skydive";
firstItem.insertAdjacentElement("afterend", secondItem);

// Step 3: Log the inner HTML of the body (which contains the bucket list items)
console.log(document.body.innerHTML);

// Step 4: Create an HTML string with a new item
const newItemHTML = "<p>Buy my dream car</p>";

// Step 5: Comment out the line where you set innerHTML directly to newItemHTML
// document.body.innerHTML = newItemHTML; // Commented out

// Step 6: Use insertAdjacentHTML to add "Buy my dream car" at the beginning of the list
document.body.insertAdjacentHTML("afterbegin", newItemHTML);

// Step 7: Add three more items using a loop
const additionalItems = ["Cruise the Caribbean", "Get my dream job", "Visit Stamford Bridge"];
additionalItems.forEach(itemText => {
    const item = document.createElement("p");
    item.innerText = itemText;
    document.body.appendChild(item); // Append to the end of the body
});

// Step 8: Log the total number of <p> elements in the list to the console
const items = document.body.querySelectorAll("p");
console.log("Total items:", items.length);

// Step 9: Change the content of the <h2> to your name instead of "Bucky's"
const header = document.querySelector("h2");
header.innerText = "Johan Rehn";

// Step 10: Replace the first item in the list with a new item
const newFirstItem = document.createElement("p");
newFirstItem.innerText = "Play in front of a big crowd";
document.body.replaceChild(newFirstItem, document.body.children[1]); // Replace first <p>

// Step 11: Replace a middle item in the list with a new item
const newMiddleItem = document.createElement("p");
newMiddleItem.innerText = "Attend the World Cup";
document.body.replaceChild(newMiddleItem, document.body.children[3]); // Replace third <p> in the list

// Step 12: Remove the last <p> element in the list
const lastItem = document.body.lastElementChild;
document.body.removeChild(lastItem); // Removes the last <p> item
