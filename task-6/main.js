const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = parseInt(result.input);
    let res = parseInt(n / 10);
    console.log("cavab:",res);
    
});
