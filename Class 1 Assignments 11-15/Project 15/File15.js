"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ['Quaid e Azam', 'My lovely grandmother', 'Sir Zia'];
const unavailableGuest = 'My lovely grandmother';
const newGuest = 'Amelia Earhart';
const dinnerMessage = "You are cordially invited to dinner with me.";
console.log(`${unavailableGuest} can't make it to dinner.`);
// Replace the unavailable guest with the new guest
guestList = guestList.map((guest) => guest === unavailableGuest ? newGuest : guest);
console.log("Second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`${guest}, ${dinnerMessage}`);
});
