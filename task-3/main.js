const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input
    let number = input.split(',');
    var n = parseInt(number[0]);
    var m = parseInt(number[1]);
    var cvb = n**m
    console.log(cvb);
    
  
});
