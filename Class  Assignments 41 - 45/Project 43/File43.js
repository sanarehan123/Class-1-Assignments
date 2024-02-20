"use strict";
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Array of original magician names
const original_magician_names = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
// Create a copy of the original array
const magician_names_copy = [...original_magician_names];
// Update the copied array to include 'the Great'
const great_magician_names = make_great(magician_names_copy);
// Display the original magician names
console.log('Original Magicians:');
show_magicians(original_magician_names);
// Display the modified magician names with 'the Great'
console.log('\nGreat Magicians:');
show_magicians(great_magician_names);
