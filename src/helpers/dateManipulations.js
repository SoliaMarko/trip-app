function getDateFromToday(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

export function getWeekday(date) {
  const WEEK_DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = date.getDay();

  return WEEK_DAYS[day];
}

// console.log(getDateFromToday(5));

export default getDateFromToday;
