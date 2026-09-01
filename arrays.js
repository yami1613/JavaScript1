// Arrays Practice

let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits[1] = "Grapes";

console.log(fruits);

// "Put Kiwi at the end of my fruits array."
fruits.push("Kiwi");
console.log(fruits);

// It removes the last item
fruits.pop();
console.log(fruits);


// Loop through array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Adds something at the beginning
  fruits.unshift("Mango"); 
console.log(fruits);

// Removes something from the beginning
fruits.shift();
console.log(fruits);

// Check if an element exists in the array
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Grapes"));


