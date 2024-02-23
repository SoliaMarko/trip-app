import './MainBlock';
import SearchBar from './Search/SearchBar';
import TripList from './Trips/TripsList';
import WeatherList from './Weather/WeatherList';

function MainBlock({
  trips,
  selectedTrip,
  onSelectTrip,
  tripWeather,
  getWeekday,
  onOpenModal,
}) {
  return (
    <>
      <SearchBar></SearchBar>
      <TripList
        trips={trips}
        selectedTrip={selectedTrip}
        onSelectTrip={onSelectTrip}
        onOpenModal={onOpenModal}
      ></TripList>

      <h3>Week</h3>
      <WeatherList
        tripWeather={tripWeather}
        getWeekday={getWeekday}
      ></WeatherList>
    </>
  );
}

export default MainBlock;
