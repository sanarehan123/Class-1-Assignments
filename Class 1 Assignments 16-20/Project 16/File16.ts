let guestList: string[] = ['Quaid e Azam', 'My lovely grandmother', 'Sir Zia'];
const dinnerMessage: string = "You are cordially invited to dinner with me.";

console.log("Three new guests have been added to the dinner party.");

// Add a new guest to the beginning of the array
guestList.unshift('Nelson Mandela');

// Add a new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, 'Marie Curie');

// Use push() to add one new guest to the end of the list
guestList.push('Albert Einstein');

console.log("New set of invitation messages:");
guestList.forEach((guest: string) => {
    console.log(`${guest}, ${dinnerMessage}`);
});
