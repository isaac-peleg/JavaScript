const prompt = require('prompt-sync')();

function minimum (a, b) {
  if (a < b) return a;
  else return b;
}

const psukim = [
"אשרי יושבי ביתך עוד יהללוך סלה",
"אשרי האיש אשר לא הלך בעצת רשעים ובדרך חטאים לא עמד ובמושב לצים לא ישב",
"יוציאם מחושך וצלמות ומוסרותיהם ינתק",
"יומם השמש לא יככה וירח בלילה",
"שירו לו שיר חדש היטיבו נגן בתרועה",
"יגעתי באנחתי אשחה בכל לילה מטתי בדמעתי ערשי אמסה"
];
function pasuk_leyom_hadin (firstName) {
  for (pasuk of psukim)
    if (pasuk[0] === firstName[0] && pasuk[pasuk.length - 1] === firstName[firstName.length - 1])
      console.log (pasuk);
}

const tfila = 'בפי ישרים תתרומם:ובשפתי צדיקים תתברך:ובלשון חסידים תתקדש:ובקרב קדושים תתהלל';
psukim = tfila.split(':');
for (pasuk of psukim) {   
  words = pasuk.split(' ');  
  console.log (pasuk, words[1][0], words[2][2]);
}

function rectangle_area (width, height) {
  return width * height;
}
function picture_mode (width, height) {
  return (width > height) ? "landscape" : "portrait";
}
let width = 10; let height = 15;
console.log ("picture width: ", width);
console.log ("picture height:", height);
console.log ("picture area:", rectangle_area (width, height));
console.log ("picture mode: ", picture_mode (width, height) );


//result = omer (6);
//console.log (result);

function hello (name) {
  return (`Hello ${name}`);
}

function gimatria (pasuk) {
  const hebrew_letters = ' אבגדהוזחטיכךלמםנןסעפףצץקרשת';
  const hebrew_gimatria = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 20, 30, 40, 40, 50, 50, 60, 70, 80, 80, 90, 90, 100, 200, 300, 400];
  let sum = 0;
  for (c of pasuk)
    sum += hebrew_gimatria[hebrew_letters.indexOf(c)];
  return sum;
}

//var name = 'isaac';
//var name = prompt('What is your name? ');
//var firstName = 'יצחק';
var firstName = 'יהודה';
console.log('Hello', firstName);
console.log ("Gimatria of", firstName, "is", gimatria(firstName));

console.log(":פסוקים ליום הדין");
pasuk_leyom_hadin(firstName);

console.log ("Calculator:")
var x = prompt('What is the first number? ');
var y = prompt('What is the second number? ');
//var x = 2;
//var y = 3;
console.log("First number is", x);
console.log("Second number is",  y);
numx = Number(x);
numy = Number(y);
console.log();
console.log ("minimum:", minimum (numx,numy));
console.log("Add",x,"+",y,"=",numx+numy);
console.log("Subtruct",x,"-",y,"=",numx-numy);
console.log("Multiply",x,"*",y,"=",numx*numy);
console.log("Power",x,"**",y,"=",numx**numy);
console.log("Divide",x,"/",y,"=",numx/numy);
console.log("Remainder",x,"%",y,"=", numx%numy);
numx++; console.log("Increment first number", "++","=", numx);
numy--; console.log("Decrement second number", "--","=", numy);

