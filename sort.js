function sort_numbers(){
  a = [7, 5, 2, 6, 1, 3, 4]
  console.log("Before:", a);
  for (i = a.length - 1; i > 0; i--)
    for (j = 0; j < i; j++) {
      if (a[j] > a[j+1]) { 
        t = a[j]; a[j] = a[j+1]; a[j+1] = t; // Swap
      } 
    console.log(a);
    }
  console.log("After:", a);
}

a = new Array (4, 5, 6, 2, 3, 4);
console.log ("Sort numbers:", a.sort());
a = new Array ('white', 'red', 'green', 'blue', 'black');
console.log ("Sort strings:", a.sort());
a = ["נהרי", "יפלח", "פלג", "כהן", "אברג'ל", "אדל"];
console.log ("Sort names:", a.sort());
console.log ("Sort names (reverse):", a.reverse());

colors = [{code: 1, name: 'black'}, {code: 3, name: 'silver'}, {code: 2, name: 'white'}, {code: 4, name: 'green'} ];
function sortByName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
};

function sortByCode(a, b) {
  return (a.code - b.code)
};

console.log ("Sort objects by color code:", colors.sort(sortByCode));
console.log ("Sort objects by color name:", colors.sort(sortByName));

const benDavid10 = [
  {appt: 6, name: 'אדל', phone: '056-6666666'},
  {appt: 3, name: 'פלג', phone: '052-3333333'},
  {appt: 4, name: 'כהן', phone: '054-4444444'},
  {appt: 1, name: 'נהרי', phone: '050-1111111'},
  {appt: 5, name: "אברג'ל", phone: '051-5555555'},
  {appt: 2, name: 'יפלח', phone: '053-2222222'},
];

console.log (bendavid10.sort())
benDavid10.sort ((a, b) => a.appt - b.appt);
console.log (benDavid10);

benDavid10.sort(sortByName);
console.log(benDavid10);

/*
האדרת והאמונה לחי העולמים
הבינה והברכה לחי העולמים
הגדולה והגבורה לחי העולמים
הדעת והדבור לחי העולמים
ההוד וההדר לחי העולמים
הוועד והוותיקות לחי העולמים
*/

const haaderet = 'האדרת והגבורה והוותיקות וההדר הדעת והברכה והאמונה הוועד הבינה הגדולה ההוד והדבור';
s = haaderet.split(' ').sort();
n = s.length / 2;
for (i = 0; i < n; i++)
    console.log (s[i], s[i + n], 'לחי העולמים');
