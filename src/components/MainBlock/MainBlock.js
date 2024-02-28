import SearchBar from './SearchBar';
import TripList from './Trips/TripsList';
import WeatherList from './Weather/WeatherList';

function MainBlock({ trips }) {
  return (
    <>
      <SearchBar></SearchBar>
      <TripList trips={trips}></TripList>

      <h3>Week</h3>
      <WeatherList></WeatherList>
    </>
  );
}

export default MainBlock;
