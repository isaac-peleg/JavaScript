// bemidbar
const sides = ['מזרח', 'דרום', 'מערב', 'צפון'];
const mothers = ['לאה' ,'רחל' ,'בלהה' ,'זלפה'];

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

const levites = [
  {name: 'גרשון', president: 'אליסף בן לאל', side: 'מערב', population: 7500, population_30_50: 2750},
  {name: 'קהת', president: 'אליצפן בן עזיאל', side: 'דרום', population: 8600, population_30_50: 2630},
  {name: 'מררי', president: 'צוריאל בן אביחיל', side: 'צפון', population: 6200, population_30_50: 3200},   
];
const bechorey_levi = 300;
const bechorey_israel = 22273;

const presidents_offerings = [
  { day: 'הראשון', tribe: 'יהודה' },
  { day: 'השני', tribe: 'יששכר' },
  { day: 'השלישי', tribe: 'זבולון' },
  { day: 'הרביעי', tribe: 'ראובן' },
  { day: 'החמישי', tribe: 'שמעון' },
  { day: 'הששי', tribe: 'גד' },
  { day: 'השביעי', tribe: 'אפרים' },
  { day: 'השמיני', tribe: 'מנשה' },
  { day: 'התשיעי', tribe: 'בנימין' },
  { day: 'העשירי', tribe: 'דן' },
  { day: 'עשתי עשר יום', tribe: 'אשר' },
  { day: 'שנים עשר יום', tribe: 'נפתלי' },
];

console.log ("\n:בני ישראל");
tribes.forEach((tribe, index) => console.log (index + 1, tribe));

sum = 0;
for (tribe of tribes)
sum += tribe.population;
console.log("כל הפקודים מבני ישראל", sum);

console.log ("\n:דגלים");
// for (side of sides) {
//     sum = 0; tribe_names = '';
//     for (tribe of tribes)
//       if (tribe.side == side) {
//         sum += tribe.population;
//         tribe_names += tribe.name + ' ';
//       }
//     console.log (side,"- מחנה",  tribe_names, sum)
// }
for (side of sides) {
  filtered = tribes
    .filter (tribe => tribe.side === side);
  sum = filtered
    .map (tribe => tribe.population)
    .reduce ((a, c) => a + c);
  tribe_names = filtered
    .map (tribe => tribe.name)
    .join ();
  console.log (side,"- מחנה",  tribe_names, sum);
}

sum = tribes.map (tribe => tribe.population).reduce ((a, c) => a + c);
console.log ('סה"כ', sum);

console.log ("\n:בני לוי")
levites.forEach(levi => console.log (levi));
levites_sum = levites.map (levi => levi.population).reduce ((a, c) => a + c);
levites_sum_30_50 = levites.map (levi => levi.population_30_50).reduce ((a, c) => a + c);
console.log("כל פקודי הלוים מבן חודש", levites_sum);
console.log ("בכורי לוי", bechorey_levi);
console.log("כל פקודי הלוים ללא בכורים ", levites_sum - bechorey_levi);
console.log ("בכורי ישראל", bechorey_israel);
over = bechorey_israel - (levites_sum - bechorey_levi);
console.log ("עודף", over);
console.log ("פדיון", over * 5, "שקלים");
console.log("בני לוי מבן שלושים ומעלה עד בן חמישים", levites_sum_30_50);

console.log ("\n:קרבנות הנשיאים");
for (i = 0; i < presidents_offerings.length; i++){
  tribe_president_name = tribes.find(tribe => tribe.name == presidents_offerings[i].tribe).president;
  console.log (`ביום ${presidents_offerings[i].day} נשיא לבני ${presidents_offerings[i].tribe} ${tribe_president_name}`);
}

console.log ("\n:סדר השבטים לפי מספר הפקודים");
tribes
  .map (tribe => [tribe.name, tribe.population])
  .sort ((a, b) => (b[1] - a[1]))
  .forEach(tribe => {console.log (tribe[0], tribe[1])});
    
console.log ("\n:כל הפקודים לפי האמהות");
for (mother of mothers) {
  sum = tribes
    .filter(tribe => tribe.mother === mother)
    .map (tribe => tribe.population)
    .reduce ((a, c) => a + c);
  console.log ("בני", mother, sum);
}
