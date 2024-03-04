import './MainBlock.css';
import SearchBar from './SearchBar';
import TripList from './Trips/TripsList';
import WeatherList from './Weather/WeatherList';

const MainBlock = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <TripList></TripList>

      <h3>Week</h3>
      <WeatherList></WeatherList>
    </>
  );
};

export default MainBlock;
