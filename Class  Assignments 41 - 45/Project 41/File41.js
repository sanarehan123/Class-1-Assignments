"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Array of magician names
const magician_names = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
// Call the show_magicians function to display magician names
show_magicians(magician_names);
