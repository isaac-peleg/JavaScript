function period(h) {
  if (h >= 0 && h < 6)
    period = 'night';
  else if (h >= 6 && h < 12)
    period = 'morning';
  else if (h >= 12 && h < 18)
    period = 'afternoon';
  else period = 'evening';  // 18-23
  return period;
}

myname = 'David';
h = Math.floor(Math.random() * 1000000) % 24;
console.log ("Time now is", h, ", Good", period (h), myname);

const period_of_day = ['nignt', 'morning', 'afternoon', 'evening'];
console.log (`Time now is ${h}:00`);
console.log ('Good', period_of_day[Math.floor (h / 6)], myname);

