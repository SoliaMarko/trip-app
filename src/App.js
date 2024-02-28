import { React, useState, useEffect, useRef, createContext } from 'react';
// components
import AsideBlock from './components/AsideBlock/AsideBlock';
import MainBlock from './components/MainBlock/MainBlock';
import Modal from './components/Modals/Modal';
// data
import citiesList from './helpers/parseData';
// local functions
import { getWeekday } from './helpers/dateTimeManipulations';
import { getFormattedTime } from './helpers/dateTimeManipulations';
import { fetchWeatherData } from './utils/fetchData';

const trips = [
  {
    id: `${citiesList[0]}2024-03-01`,
    city: citiesList[0],
    startDate: '2024-03-01',
    endDate: '2024-03-05',
    selected: true,
  },
];

// Contexts
export const TripContext = createContext();
export const WeatherContext = createContext();
export const ModalContext = createContext();
export const TimeContext = createContext();

function App() {
  const [selectedTripId, setSelectedTripId] = useState(trips[0].id);
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  const [todayWeather, setTodayWeather] = useState({});
  const [tripWeather, setTripWeather] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [duration, setDuration] = useState(getTimeToTrip(trips[0].id));
  const [time, setTime] = useState(duration);
  const [tripFilter, setTripFilter] = useState('');

  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [time]);

  function handleTripFilter(e) {
    setTripFilter(() => e.target.value);
  }

  function getTimeToTrip(id) {
    const trip = trips.find(trip => trip.id === id);
    return Date.parse(trip.startDate) - Date.parse(new Date());
  }

  function handleClearTimeout() {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }

  function handleSelectTrip(id) {
    setSelectedTripId(() => id);
    setSelectedTrip(() => trips.find(trip => trip.id === selectedTripId));
    setDuration(getTimeToTrip(id));
    setTime(getTimeToTrip(id));
    handleClearTimeout();
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

  function handleAddNewTrip(e) {
    e.preventDefault();
    if (!inputCity || !inputStartDate || !inputEndDate) {
      console.log('not enough info');
      return;
    }

    trips.push({
      id: `${inputCity}${inputStartDate}`,
      city: inputCity,
      startDate: inputStartDate,
      endDate: inputEndDate,
      selected: false,
    });

    handleCloseModal();

    // Reset Inputs
    handleInputCity('');
    handleInputStartDate('');
    handleInputEndDate('');
  }

  useEffect(() => {
    const fetchData = async () => {
      const tripWeatherData = await fetchWeatherData(
        trips.find(trip => trip.id === selectedTripId),
        false
      );

      setTripWeather(() => tripWeatherData);
    };
    fetchData();
  }, [selectedTripId]);

  useEffect(() => {
    const fetchData = async () => {
      const todayWeatherData = await fetchWeatherData(
        trips.find(trip => trip.id === selectedTripId)
      );

      setTodayWeather(() => todayWeatherData);
    };
    fetchData();
  }, [selectedTripId]);

  if (
    Object.keys(todayWeather).length === 0 ||
    Object.keys(tripWeather).length === 0
  ) {
    return <p>Loading...</p>;
  }

  const getTrips = () => {
    return !tripFilter
      ? trips
      : trips.filter(trip =>
          trip.city.toLowerCase().startsWith(tripFilter.toLowerCase())
        );
  };

  // Setting Context Values

  const tripValues = {
    trips: getTrips(),
    selectedTrip: selectedTrip,
    onSelectTrip: handleSelectTrip,
    onTripFilter: handleTripFilter,
    citiesList: citiesList,
    onSaveNewTrip: handleAddNewTrip,
  };

  const weatherValues = {
    tripWeather: tripWeather,
    todayWeather: todayWeather,
  };

  const modalValues = {
    onOpenModal: handleOpenModal,
    onCloseModal: handleCloseModal,
    onInputCity: handleInputCity,
    onInputStartDate: handleInputStartDate,
    onInputEndDate: handleInputEndDate,
  };

  const TimeValues = {
    getWeekday: getWeekday,
    duration: duration,
    timeLeftObj: getFormattedTime(time),
  };

  return (
    <TripContext.Provider value={tripValues}>
      <WeatherContext.Provider value={weatherValues}>
        <ModalContext.Provider value={modalValues}>
          <TimeContext.Provider value={TimeValues}>
            <div className="app-container">
              <div className="main-container">
                <div className="main-block">
                  <MainBlock />
                </div>
                <div className="aside-block">
                  <AsideBlock />
                </div>
              </div>

              {openModal && <div className="overlap"></div>}

              {openModal && (
                <div className="modal-container">
                  <Modal />
                </div>
              )}
            </div>
          </TimeContext.Provider>
        </ModalContext.Provider>
      </WeatherContext.Provider>
    </TripContext.Provider>
  );
}

export default App;
