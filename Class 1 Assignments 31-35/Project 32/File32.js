"use strict";
const current_users = ['Alice', 'Bob', 'Charlie', 'david', 'Eve'];
const new_users = ['alice', 'Bob', 'frank', 'Gina', 'Hannah'];
for (let i = 0; i < new_users.length; i++) {
    const newUserLowercase = new_users[i].toLowerCase();
    const usernameTaken = current_users.some(user => user.toLowerCase() === newUserLowercase);
    if (usernameTaken) {
        console.log(`${new_users[i]} needs to enter a new username.`);
    }
    else {
        console.log(`${new_users[i]} is available.`);
    }
}
