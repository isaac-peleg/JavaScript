const sides = ['מזרח', 'דרום', 'מערב', 'צפון'];
const tribes = [
  {name: 'ראובן', mother: 'לאה', president: 'אליצור בן שדיאור', side: 'דרום', population: 46500},
  {name: 'שמעון', mother: 'לאה', president: 'שלומיאל בן צורישדי', side: 'דרום', population: 59300},    
  {name: 'יהודה', mother: 'לאה', president: 'נחשון בן עמינדב', side: 'מזרח', population: 74600}, 
  {name: 'יששכר', mother: 'לאה', president: 'נתנאל בן צוער', side: 'מזרח', population: 54400},
  {name: 'זבולון', mother: 'לאה', president: 'אליאב בן חלן', side: 'מזרח', population: 57400},
  {name: 'אפרים', mother: 'רחל', president: 'אלישמע בן עמיהוד', side: 'מערב', population: 40500},
  {name: 'מנשה', mother: 'רחל', president: 'גמליאל בן פדהצור', side: 'מערב', population: 32200},
  {name: 'בנימין', mother: 'רחל', president: 'אבידן בן גדעוני', side: 'מערב', population: 35400},
  {name: 'דן', mother: 'בלהה', president: 'אחיעזר בן עמישדי', side: 'צפון', population: 62700},
  {name: 'אשר', mother: 'זלפה', president: 'פגעיאל בן עכרן', side: 'צפון', population: 41500},
  {name: 'גד',  mother: 'זלפה', president: 'אליסף בן דעואל', side: 'דרום', population: 45650},
  {name: 'נפתלי', mother: 'בלהה', president: 'אחירע בן עינן', side: 'צפון', population: 53400},
];

const mothers = ['לאה','רחל','בלהה','זלפה'];
for (mother of mothers) {
  sum = tribes
    .filter(tribe => tribe.mother === mother)
    .map (tribe => tribe.population)
    .reduce ((a, c) => a + c);
  console.log ("בני", mother, sum);
}

sum = tribes.map (tribe => tribe.population).reduce ((a, c) => a + c);
console.log ('סה"כ', sum);

for (side of sides) {
  filtered = tribes
    .filter (tribe => tribe.side === side);
  sum = filtered
    .map (tribe => tribe.population)
    .reduce ((a, c) => a + c);
  names = filtered
    .map (tribe => tribe.name)
    .join ();
  console.log (side,"- מחנה",  names, sum)
}
for (side of sides) {
  sum = 0;
  names = '';
  for (tribe of tribes)
    if (tribe.side == side) {
      sum += tribe.population;
      names += tribe.name + ' ';
    }
  console.log (side,"- מחנה",  names, sum)
}

sum = tribes.map (tribe => tribe.population).reduce ((a, c) => a + c);
console.log ('סה"כ', sum);

s = tribes.map (tribe => ({name: tribe.name, population: tribe.population}));
s.sort( (a, b) => (b.population - a.population));
for (t of s)
  console.log (t.population, t.name);
x = s.map (s => [s.name, s.population]);
//x.join();
for (t of x)
  console.log (t[0], t[1]);

