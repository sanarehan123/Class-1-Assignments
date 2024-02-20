//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestList: string[] = ['Quaid e Azam', 'My lovely grandmother', 'Sir Zia'];
const dinnerMessage: string = "You are cordially invited to dinner with me.";

guestList.forEach((guest: string) => {
    console.log(`${guest}, ${dinnerMessage}`);
});
