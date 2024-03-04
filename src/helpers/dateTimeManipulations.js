export const getDateFromToday = days => {
  const date = new Date();
  date.setDate(date.getDate() + days - 1);
  return date;
};

export const getWeekday = date => {
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
};

export const convertDateToYYYYMMDD = date => {
  const offset = date.getTimezoneOffset();
  const handledDate = new Date(date.getTime() - offset * 60 * 1000);
  return handledDate.toISOString().split('T')[0];
};

export const getFormattedTime = miliseconds => {
  if (miliseconds <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const totalSeconds = parseInt(Math.floor(miliseconds / 1000));
  const totalMinutes = parseInt(Math.floor(totalSeconds / 60));
  const totalHours = parseInt(Math.floor(totalMinutes / 60));
  const days = parseInt(Math.floor(totalHours / 24));

  const seconds = parseInt(totalSeconds % 60);
  const minutes = parseInt(totalMinutes % 60);
  const hours = parseInt(totalHours % 24);

  return { days: days, hours: hours, minutes: minutes, seconds: seconds };
};
