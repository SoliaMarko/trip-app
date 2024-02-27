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

export const getFormattedTime = miliseconds => {
  let totalSeconds = parseInt(Math.floor(miliseconds / 1000));
  let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  let totalHours = parseInt(Math.floor(totalMinutes / 60));
  let days = parseInt(Math.floor(totalHours / 24));

  let seconds = parseInt(totalSeconds % 60);
  let minutes = parseInt(totalMinutes % 60);
  let hours = parseInt(totalHours % 24);

  return { days: days, hours: hours, minutes: minutes, seconds: seconds };
};
