import cities from '../data/cities-mock-list.json';

const parceData = data => {
  return JSON.parse(JSON.stringify(data));
};

const getCities = jsonData => {
  try {
    const obj = parceData(jsonData);
    return obj.cities;
  } catch (e) {
    console.error(e);
  }
};

const citiesList = getCities(cities);

export default citiesList;
