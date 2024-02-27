const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherData = async (tripData, weatherToday = true) => {
  const url = `
    https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
      tripData.city
    }/${
    weatherToday ? 'today' : tripData.startDate + '/' + tripData.endDate
  }?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
