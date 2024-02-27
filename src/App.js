import { useState, useEffect, useRef } from 'react';
import './App.css';
import AsideBlock from './components/AsideBlock/AsideBlock';
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modals/Modal';
import cities from './data/cities-mock-list.json';
import getCities from './helpers/parseData';
import { getWeekday } from './helpers/dateTimeManipulations';
import { getFormattedTime } from './helpers/dateTimeManipulations';

// const WEATHER_API_KEY = '96Q648C9TNSGLNZL9A687Q7JN';
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const citiesList = getCities(cities);

const trips = [
  {
    id: `${citiesList[0]}2024-02-26`,
    city: citiesList[0],
    startDate: '2024-02-26',
    endDate: '2024-02-30',
  },
  {
    id: `${citiesList[1]}213`,
    city: citiesList[1],
    startDate: '2024-02-25',
    endDate: '2024-02-30',
  },
  {
    id: `${citiesList[2]}213`,
    city: citiesList[2],
    startDate: '2024-02-25',
    endDate: '2024-02-30',
  },
];

function App() {
  const [selectedTripId, setSelectedTripId] = useState(trips[0].id);
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  const [todayWeather, setTodayWeather] = useState({});
  const [tripWeather, setTripWeather] = useState({});

  const [openModal, setOpenModal] = useState(false);
  const [duration, setDuration] = useState(getTimeToTrip());

  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  // const timeLeftObj = getFormattedTime(time);

  function handleSearchTrip(e) {}

  function getTimeToTrip() {
    return Date.parse(selectedTrip.startDate) - Date.parse(new Date());
  }

  function handleSelectTrip(id) {
    setSelectedTripId(() => id);
    setSelectedTrip(() => trips.find(trip => trip.id === selectedTripId));
    setDuration(() => getTimeToTrip());
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  // ***** INPUTS STATES *****

  const [inputCity, setInputCity] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');

  function handleInputCity(city) {
    setInputCity(city);
  }

  function handleInputStartDate(date) {
    setInputStartDate(date);
  }

  function handleInputEndDate(date) {
    setInputEndDate(date);
  }

  function handleAddNewTrip() {
    if (!inputCity || !inputStartDate || !inputEndDate) {
      console.log('not enough info');
      return;
    }

    trips.push({
      id: `${inputCity}${inputStartDate}`,
      city: inputCity,
      startDate: inputStartDate,
      endDate: inputEndDate,
    });

    handleCloseModal();

    // Reset Inputs
    handleInputCity('');
    handleInputStartDate('');
    handleInputEndDate('');
  }

  console.log(selectedTrip);
  console.log(selectedTripId);
  console.log(duration);

  useEffect(
    function () {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          trips.find(trip => trip.id === selectedTripId).city
        }/${trips.find(trip => trip.id === selectedTripId).startDate}/${
          trips.find(trip => trip.id === selectedTripId).endDate
        }?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`
      )
        .then(res => res.json())
        .then(data => {
          setTripWeather(() => data);
        });
    },
    [selectedTripId]
  );

  useEffect(
    function () {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          trips.find(trip => trip.id === selectedTripId).city
        }/today?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json
      `
      )
        .then(res => res.json())
        .then(data => {
          setTodayWeather(() => data);
        });
    },
    [selectedTripId]
  );

  if (
    Object.keys(todayWeather).length === 0 ||
    Object.keys(tripWeather).length === 0
  ) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="main-block">
          <MainBlock
            trips={trips}
            selectedTrip={selectedTrip}
            onSelectTrip={handleSelectTrip}
            tripWeather={tripWeather}
            getWeekday={getWeekday}
            onOpenModal={handleOpenModal}
          />
        </div>
        <div className="aside-block">
          <AsideBlock
            todayWeather={todayWeather}
            getWeekday={getWeekday}
            duration={duration}
            timeLeftObj={getFormattedTime(time)}
          />
        </div>
      </div>

      {openModal && <div className="overlap"></div>}

      {openModal && (
        <div className="modal-container">
          <Modal
            citiesList={citiesList}
            onCloseModal={handleCloseModal}
            onInputCity={handleInputCity}
            onInputStartDate={handleInputStartDate}
            onInputEndDate={handleInputEndDate}
            onSaveNewTrip={handleAddNewTrip}
          />
        </div>
      )}
    </div>
  );
}

export default App;
