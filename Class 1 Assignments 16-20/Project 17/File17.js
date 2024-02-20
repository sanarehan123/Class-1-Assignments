"use strict";
let guestList = ['Nelson Mandela', 'Quaid e Azam', 'Marie Curie', 'My lovely grandmother', 'Sir Zia', 'Albert Einstein'];
const dinnerMessage = "You are cordially invited to dinner with me.";
console.log("Only two people can be invited for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, you can't be invited to dinner.`);
}
guestList.forEach((guest) => {
    console.log(`${guest}, ${dinnerMessage}`);
});
guestList.splice(2);
console.log("Guest list after removal:");
console.log(guestList);
