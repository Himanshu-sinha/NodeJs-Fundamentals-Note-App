console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

//creates a new file if it does not exist and appends 'hello world!'
//fs.appendFile('greeting.txt', 'Hello ' + user.username + "!");

//better way to use the string
fs.appendFile('greeting.txt', `Hello ${user.username}!`);



