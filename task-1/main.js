const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let input = result.input;
let number = input.split(',');
let n = parseInt(number[0]);
let m = parseInt(number[1]);
let b = parseInt(number[2]);
let cvb = (n**m)%b
console.log(cvb);


});
