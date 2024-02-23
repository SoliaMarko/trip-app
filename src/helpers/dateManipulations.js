export function getDateFromToday(days) {
  const date = new Date();
  date.setDate(date.getDate() + days - 1);
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

export function convertDateToYYYYMMDD(date) {
  const offset = date.getTimezoneOffset();
  const handledDate = new Date(date.getTime() - offset * 60 * 1000);
  return handledDate.toISOString().split('T')[0];
}

export default getDateFromToday;
