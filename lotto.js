tofes = [ 
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
chazak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
result6 = [0, 0, 0, 0, 0, 0]; 
result7 = 0;

function tavla()
{
  let a = [];
  let t = [];

  for (i = 0; i < 37; i++) a[i] = 0;
  for (j = 0; j < 6; j++) {              // נחש ששה מספרים שונים בין 0 ל 36
    while (true) {
      i = Math.floor(Math.random() * 1000000) % 37; 
      if (a[i] == 0) {                // בדוק אם המספר קיים
        a[i] = 1;
        break;
      }
    }
  }
  j = 0;
  for (i = 0; i < 37; i++)
    if (a[i]) 
      t[j++] = i + 1;
  return t;
}

function fill()
{
  console.log ("Lottery fill:");
  for (n = 0; n < 14; n++) { 
    tofes[n] = tavla();  // נחש ששה מספרים שונים בין 1 ל 37
    chazak[n] = Math.floor(Math.random() * 1000000) % 7 + 1;   //  נחש מספר חזק בין 1 ל 7

    console.log ("(", n + 1, ")", tofes[n][0], tofes[n][1], tofes[n][2], tofes[n][3], tofes[n][4], tofes[n][5], '*', chazak[n]);
  }
}

function lottery()
{
  result6 = tavla(); // נחש ששה מספרים שונים בין 1 ל 37
  result7 = Math.floor(Math.random() * 1000000) % 7 + 1;   //  נחש מספר חזק בין 1 ל 7  
  console.log ("Lottery results: ", result6[0], result6[1], result6[2], result6[3], result6[4], result6[5], '*', result7);
}

function check()
{
  console.log ("Lottery check:");
  for (n = 0; n < 14; n++) {
    sum6 = 0;
    t = tofes[n]; c = chazak[n];
    for (j = 0; j < 6; j++)
    {
      if (result6.includes (t[j])) 
      sum6++;
    }
    power = c == result7;
    winner = (sum6 == 6) && (power == true) ? "!!! Winner !!!" : '';
    console.log ("(", n + 1, ")", t[0], t[1], t[2], t[3], t[4], t[5], '*', c, "=>", sum6, power, winner);
  }
}

fill();
lottery();
check();