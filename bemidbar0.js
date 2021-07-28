// bemidbar
const sides = ['מזרח', 'דרום', 'מערב', 'צפון'];
const days = ['', 'הראשון','השני','השלישי','הרביעי','החמישי','הששי','השביעי','השמיני','התשיעי','העשירי','עשתי עשר יום','שנים עשר יום'];

const tribes = [
    {name: 'ראובן', mother: 'לאה', president: 'אליצור בן שדיאור', day: 4, side: 'דרום', population: 46500},
    {name: 'שמעון', mother: 'לאה', president: 'שלומיאל בן צורישדי', day: 5, side: 'דרום', population: 59300},    
    {name: 'יהודה', mother: 'לאה', president: 'נחשון בן עמינדב', day: 1, side: 'מזרח', population: 74600}, 
    {name: 'יששכר', mother: 'לאה', president: 'נתנאל בן צוער', day: 2, side: 'מזרח', population: 54400},
    {name: 'זבולון', mother: 'לאה', president: 'אליאב בן חלן', day: 3, side: 'מזרח', population: 57400},
    {name: 'אפרים', mother: 'רחל', president: 'אלישמע בן עמיהוד', day: 7, side: 'מערב', population: 40500},
    {name: 'מנשה', mother: 'רחל', president: 'גמליאל בן פדהצור', day: 8, side: 'מערב', population: 32200},
    {name: 'בנימין', mother: 'רחל', president: 'אבידן בן גדעוני', day: 9, side: 'מערב', population: 35400},
    {name: 'דן', mother: 'בלהה', president: 'אחיעזר בן עמישדי', day: 10, side: 'צפון', population: 62700},
    {name: 'אשר', mother: 'זלפה', president: 'פגעיאל בן עכרן', day: 11, side: 'צפון', population: 41500},
    {name: 'גד',  mother: 'זלפה', president: 'אליסף בן דעואל', day: 6, side: 'דרום', population: 45650},
    {name: 'נפתלי', mother: 'בלהה', president: 'אחירע בן עינן', day: 12, side: 'צפון', population: 53400},
];

const levis = [
    {name: 'גרשון', president: 'אליסף בן לאל', side: 'מערב', population: 7500, population_30_50: 2750},
    {name: 'קהת', president: 'אליצפן בן עזיאל', side: 'דרום', population: 8600, population_30_50: 2630},
    {name: 'מררי', president: 'צוריאל בן אביחיל', side: 'צפון', population: 6200, population_30_50: 3200},   
];
const bechorey_levi = 300;
const bechorey_israel = 22273;

console.log ("בני ישראל:");
for (tribe of tribes)
  console.log (tribe);

sum = 0;
for (tribe of tribes)
  sum += tribe.population;
console.log("כל הפקדים מבני ישראל", sum);

console.log ("דגלים:");
// for (side of sides) {
//     sum = 0;
//     for (tribe of tribes)
//       if (tribe.side == side)
//         sum += tribe.population;
//     console.log (side, sum);
// }
sides_sum = [0, 0, 0, 0];
for (tribe of tribes)
  sides_sum[sides.indexOf(tribe.side)] += tribe.population;
for (i = 0; i < sides.length; i++)
  console.log (sides[i], sides_sum[i]);

console.log ("בני לוי:")
for (levi of levis)
  console.log (levi);

levis_sum = 0;
levis_sum_30_50 = 0;
for (levi of levis) {
  levis_sum += levi.population;
  levis_sum_30_50 += levi.population_30_50;
}
console.log("כל פקדי הלויים", levis_sum);
console.log ("בכורי לוי", bechorey_levi);
console.log("כל פקדי הלויים ללא בכורים ", levis_sum - bechorey_levi);
console.log ("בכורי ישראל", bechorey_israel);
odef = bechorey_israel - (levis_sum - bechorey_levi);
console.log ("עודף", odef);
console.log ("פדיון", odef * 5, "שקלים");
console.log("לויים מבן שלושים ומעלה עד בן חמישים", levis_sum_30_50);

console.log (":השבטים לפי גדלם");
tribes.sort (function(a, b) {return b.population - a.population;});
for (tribe of tribes)
  console.log (tribe.name, tribe.population);

console.log (":מתנות הנשיאים");
tribes.sort(function (a, b) {return a.day - b.day});
for (tribe of tribes)
//  console.log (tribe.day, tribe.name, tribe.president); 
  console.log (`ביום ${days[tribe.day]} נשיא לבני ${tribe.name} ${tribe.president}`)