const number_words_0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
const number_words_10_19 = ['ten', 'eleven', 'tweleve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const number_words_20_90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numbers_0_99 (n)
{
  let w = '';
  let m = Math.floor(n / 10);
  let r = n % 10;
  if (m == 1) // ten, eleven, tweleve, ....
    w += ' ' + number_words_10_19[r];
  else {
     if (m >= 2)  // twenty, thirty, ....
       w += ' ' + number_words_20_90[m - 2];
     if (r > 0) 
       w += ' ' + number_words_0_9[r];   
  }

  return w;
}

function numbers_0_999(n)
{
  let w = '';
  let m = Math.floor (n / 100);
  if (m > 0) 
    w += ' ' + number_words_0_9[m] + ' hundred';
  let r = n % 100;
  if (r > 0)
    w += numbers_0_99(r);
  return (w);
}
function billions (n)
{
  let m = Math.floor (n / 1000000000);
  return (numbers_0_999 (m) + ' billion');
}
function millions (n)
{
  let m = Math.floor (n / 1000000);
  return (numbers_0_999 (m) + ' million');
}
function thousands (n)
{
  let m = Math.floor (n / 1000);
  return (numbers_0_999 (m) + ' thousand');
}

let n0 = 912105102609;
let n = n0;
let w = '';
if (n >= 1000000000) 
{
  w = billions(n); 
  n = n % 1000000000;
}
if (n >= 1000000)
{ 
  w += millions (n);
  n = n % 1000000;
}
if (n >= 1000)
{ 
  w += thousands (n);
  n = n % 1000;
}

w += numbers_0_999 (n);
console.log ("wording of number", n0, "is", w);

