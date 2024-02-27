import cities from '../data/cities-mock-list.json';

function parceData(data) {
  return JSON.parse(JSON.stringify(data));
}

function getCities(jsonData) {
  try {
    const obj = parceData(jsonData);
    return obj.cities;
  } catch (e) {
    console.error(e);
  }
}

const citiesList = getCities(cities);

export default citiesList;
