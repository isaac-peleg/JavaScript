tofes = [];
result = [];
result6 = [];
result7 = 0;

function tavla()
{
  let a = [];
  let t = [];

  for (i = 0; i < 37; i++)
    a[i] = 0;
  for (i = 0; i < 6; i++) {              // נחש ששה מספרים שונים בין 0 ל 36
    while (true) {
      x = Math.floor(Math.random() * 1000000) % 37; 
      if (a[x] == 0) {                // בדוק אם המספר קיים
        a[x] = 1;
        break;
      }
    }
  }
  b = Math.floor(Math.random() * 1000000) % 7 + 1;   //  נחש מספר חזק בין 1 ל 7

  j = 0;
  for (i = 0; i < 37; i++)    // הוסף את ששת המספרים למערך
    if (a[i]) 
       t[j++] = i + 1;
  t[j] = b;                // הוסף את המספר החזק למערך
  return t;
}
function print_tavla (t)
{
  s = t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + '; ' + t[6];
  return s;
}

function fill()
{
    for (n = 0; n < 14; n++) { 
        t = tavla ();
      console.log ("(", n + 1, ")", print_tavla (t));
      tofes = tofes.concat(t);
    }
}

function lottery()
{
  result = tavla();
  console.log ("Lottery results: ", print_tavla (result));
  result6 = [...result];
  result7 = result[6];
  result6.pop();
}

function check()
{
    console.log ("Lottery check");
    for (n = 0; n < 14; n++) {
      sum6 = 0;
      t = tofes.slice (n * 7, n * 7 + 7);
      for (j = 0; j < 6; j++)
      {
          if (result6.includes (t[j])) 
            sum6++;
      }
      power = t[6] == result7;
      winner = (sum6 == 6) && (power == true) ? "!!! Winner !!!" : '';
      console.log ("(", n + 1, ")", print_tavla(t), "=>", sum6, power, winner);
    }
}

fill();
lottery();
check();

