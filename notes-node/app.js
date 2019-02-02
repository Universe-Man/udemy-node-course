console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString("Ian"));
let filteredArray = _.uniq(["Ian", 1, "Ian", 1, 2, 3, 4]);
console.log(filteredArray);


// STUFF
// let res = notes.addNote();
// console.log(res);
// let add = notes.add(9, -2);
// console.log(add);
// let user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
