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

export default getCities;
