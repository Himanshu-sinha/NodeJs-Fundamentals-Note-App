console.log('Starting notes.js');

//console.log(module);

//module.exports.age = 25;

module.exports.addNote = () => {
console.log('addNote');
return 'New note';
};

module.exports.addNumbers = function(x, b){
    var sum = x + b;
    return sum;

};