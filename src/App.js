import { useState, useEffect } from 'react';
import './App.css';
import AsideBlock from './components/AsideBlock/AsideBlock';
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modals/Modal';
import cities from './data/cities-mock-list.json';
import getCities from './helpers/parseData';
import { getWeekday } from './helpers/dateManipulations';

const API_KEY = '96Q648C9TNSGLNZL9A687Q7JN';

function getCurrentTimestamp() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  return timestamp;
}

const citiesList = getCities(cities);

const trips = [
  {
    id: `${citiesList[0]}213`,
    city: citiesList[0],
    startDate: '2024-02-25',
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
  const [selectedTrip, setSelectedTrip] = useState({});
  const [todayWeather, setTodayWeather] = useState({});
  const [tripWeather, setTripWeather] = useState({});

  const [openModal, setOpenModal] = useState(false);

  function handleSelectTrip(id) {
    setSelectedTripId(() => id);
    setSelectedTrip(() => trips.find(trip => trip.id === selectedTripId));
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

  function handleAddNewTrip(params) {
    // SOME CODE

    if (!inputCity || !inputStartDate || !inputEndDate) {
      console.log('not enough info');
      return;
    }

    trips.push({
      id: `${inputCity}213`,
      city: inputCity,
      startDate: inputStartDate,
      endDate: inputEndDate,
    });

    handleCloseModal();
  }

  useEffect(
    function () {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          trips.find(trip => trip.id === selectedTripId).city
        }/2024-02-22/2024-02-30?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
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
        }/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json
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
          ></MainBlock>
        </div>
        <div className="aside-block">
          <AsideBlock
            todayWeather={todayWeather}
            getWeekday={getWeekday}
          ></AsideBlock>
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
          ></Modal>
        </div>
      )}
    </div>
  );
}

export default App;
