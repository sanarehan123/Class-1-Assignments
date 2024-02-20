let travelDestinations: string[] = ['Maldives', 'Japan', 'Italy', 'New Zealand', 'Brazil'];

// Print the array in its original order
console.log("Original Order:", travelDestinations);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...travelDestinations].sort());

// Print the array to show it's still in its original order
console.log("Original Order:", travelDestinations);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...travelDestinations].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original Order:", travelDestinations);

// Reverse the order of the list and print the array
travelDestinations = travelDestinations.reverse();
console.log("Reversed Order:", travelDestinations);

// Reverse the order of the list again to restore its original order
travelDestinations = travelDestinations.reverse();
console.log("Original Order:", travelDestinations);

// Sort the array in alphabetical order and print the array
travelDestinations.sort();
console.log("Sorted Alphabetical Order:", travelDestinations);

// Sort the array in reverse alphabetical order and print the array
travelDestinations.sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", travelDestinations);
