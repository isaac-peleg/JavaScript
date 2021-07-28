//const prompt = require('prompt-sync')();

function omer (d)
{
  if (d < 0 || d > 49) 
    return "Wrong number of days. Should be 1-49";

  let result = `היום `;
  if (d === 1)
    result += `יום אחד `;
  else if (d <= 10)
    result += `${d} ימים `;
  else
    result += `${d} יום `;

  let r = d % 7;
  let w = (d - r ) / 7;
  if (w > 0)
  {
    if (w === 1)
      result += `שהם שבוע אחד `;
    else 
      result += `שהם ${w} שבועות `;
    
    if (r > 0)
    {
      if (r === 1)
        result += `ויום אחד `
      else
        result += `ו ${r} ימים `;
    }
  }

  result += 'לעומר';
  return result;
}
// הספירה לפי עדות המזרח במילים
function number_words (n) {
    word_0_9 =[``, `אחד` ,`שנים` ,`שלושה` ,`ארבעה` ,`חמישה` ,`ששה`,`שבעה` ,`שמונה` ,`תשעה`];
    word_11_40 =[``, `עשר` ,`עשרים` ,`שלושים` ,`ארבעים`];

    if (n == 2)
      s = 'שני';
    else if (n < 10)
      s = word_0_9[n];
    else if (n == 10)
      s = 'עשרה';
    else if (n > 10 && n < 50) {
        if (n % 10 == 0)
          s = word_11_40[Math.floor(n / 10)];
        else  {
            s = word_0_9[n % 10] + ' ';
            if (n > 20)
              s += 'ו';
            s += word_11_40[Math.floor(n / 10)]; 
        }  
    }

    return s;
}


function omer_1_49()
{
    for (w = 0; w < 7; w++) {
        for (d = 0; d < 7; d++) {
            i = w * 7 + d;
            s = `היום`;
            if (i == 1)
              s+= ` יום אחד `
            else if (i <= 10)
              s += ` ${i} ימים `;
            else
              s += ` ${i} יום `;
            s += `לעומר `;

            if (w == 1) s += `שהם שבוע אחד `;
            if (w > 1) s += `שהם ${w} שבועות `;
            if (w > 0 && d == 1) s += `ויום אחד`;
            if (w > 0 && d > 1) s += (`ו ${d} ימים `);
            if (i > 0) console.log (s);
        }
        if (w == 6) {
            s = `היום`;
            s += ` ${i + 1} יום לעומר `;
            s += `שהם ${w + 1} שבועות `;
            console.log(s);
        }
    }

    for (n = 1; n < 50; n++)
       console.log (number_words (n));
}

const sefirot = ['חסד', 'גבורה', 'תפארת', 'נצח', 'הוד', 'יסוד', 'מלכות'];
for (w = 0; w < 7; w++)
  for (d = 0; d < 7; d++) {
    d1 = d + 1; w1 = w; if (d1 == 7) {d1 = 0; w1++;};
    ls = `היום ${(w1 * 7 + d1)} ימים לעומר`;
    ws = w1 + ' שבועות' ; if (w1 == 0) ws = '';
    ds = d1 +  ' ימים'; if (w1 == 0 || d1 == 0) ds = '';
    s = sefirot[w] + " שב" + sefirot[d];
    console.log  (ls, ":", ws, ds, ":", s);
  }

// omer_1_49();

function omer49 (month, day) {
    d = 0;
    if (month == 7 && day >= 16)  // ניסן טז-ל
      d = day - 15;
    else if (month == 8 && day <= 29) // אייר א-כט
      d = 15 + day;
    else if (month == 9 && day <= 5) // סיון א-ה
      d = 44 + day;

    return d;
}

const months = ['', 'תשרי' ,'חשון' ,'כסלו' ,'טבת' ,'שבט' ,'אדר' ,'ניסן' ,'אייר' ,'סיון' ,'תמוז' ,'אב' ,'אלול'];
const days = ['', 'א' ,'ב' ,'ג' ,'ד' ,'ה' ,'ו' ,'ז' ,'ח' ,'ט' ,'י' ,'יא' ,'יב' ,'יג' ,'יד' ,'טו' ,'טז' ,'יז' ,'יח' ,'יט' ,'כ' ,'כא' ,'כב' ,'כג' ,'כד' ,'כה' ,'כו' ,'כז' ,'כח','כט' ,'ל']

for (month = 1; month <= 12; month++)
  for (day = 1; day <= 30; day++)
  {
     d = omer49 (month, day);
     if (d) console.log (` ${days[day]} ב${months[month]}:`, omer(d));
  }
