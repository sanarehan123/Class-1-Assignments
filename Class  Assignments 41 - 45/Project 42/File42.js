"use strict";
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Array of magician names
let magician_names = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
// Update magician names to include 'the Great'
magician_names = make_great(magician_names);
// Display the modified magician names
show_magicians(magician_names);
