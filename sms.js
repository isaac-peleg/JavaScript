const prompt = require('prompt-sync')();

function guess(code) {
    for (i = 0; i < 4; i++)
      code[i] = Math.floor(Math.random() * 10);
    return code;
}

function check (code, response)
{
  if (response.length != 4)
    return false;
  for (i = 0; i < 4; i++)
    if (Number(response[i]) != code[i])
      break;
   return i == 4;    
}

code = [];
code = guess(code);
console.log ("Guess code:", code)
console.log ("Sending message"); 
console.log ("Enter code: " + code[0] + code[1] + code[2] + code[3]);
response = prompt("Get response: ");
console.log ("Checking response:", response, check(code, response));