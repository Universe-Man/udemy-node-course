console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

// let res = notes.addNote();
// console.log(res);

let add = notes.add(9, -2);
console.log(add);

// let user = os.userInfo();
// console.log(user);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
