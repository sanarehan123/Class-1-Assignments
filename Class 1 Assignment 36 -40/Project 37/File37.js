"use strict";
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`The T-shirt is size ${size} and it has the message: "${message}".`);
}
// Create large shirt with default message
make_shirt();
// Create medium shirt with default message
make_shirt('Medium');
// Create a small shirt with a custom message
make_shirt('Small', 'Stay curious!');
