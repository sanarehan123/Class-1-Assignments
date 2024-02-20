//Greetings: Start with the array you used above, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const names: string[] = ['Saira', 'Sameena', 'Rabia', 'Meryam', 'Huma'];
const greetingMessage: string = "Hello, ";

names.forEach((name: string) => {
    console.log(greetingMessage + name + "!");
});
