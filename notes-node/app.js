console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var sum = notes.addNumbers(9,-2);
console.log(sum);

// var user = os.userInfo();

// //creates a new file if it does not exist and appends 'hello world!'
// //fs.appendFile('greeting.txt', 'Hello ' + user.username + "!");

// //better way to use the string
// fs.appendFile('greeting.txt', `Hello ${user.username}! you are ${notes.age}`);


