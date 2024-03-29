import './App.css';
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
    id: `${citiesList[0]}2024-03-18`,
    city: citiesList[0],
    startDate: '2024-03-18',
    endDate: '2024-03-19',
    selected: true,
  },
  {
    id: `${citiesList[1]}2024-03-07`,
    city: citiesList[1],
    startDate: '2024-03-07',
    endDate: '2024-03-13',
    selected: false,
  },
  {
    id: `${citiesList[2]}2024-03-13`,
    city: citiesList[2],
    startDate: '2024-03-13',
    endDate: '2024-03-16',
    selected: false,
  },
  {
    id: `${citiesList[3]}2024-03-11`,
    city: citiesList[3],
    startDate: '2024-03-11',
    endDate: '2024-03-14',
    selected: false,
  },
];

// Contexts
export const TripContext = createContext();
export const WeatherContext = createContext();
export const ModalContext = createContext();
export const TimeContext = createContext();

const App = () => {
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  const [todayWeather, setTodayWeather] = useState({});
  const [tripWeather, setTripWeather] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [duration, setDuration] = useState(getTimeToTrip(trips[0].id));
  const [time, setTime] = useState(duration);
  const [tripFilter, setTripFilter] = useState('');
  const [sortTrips, setSortTrips] = useState('');

  const timerRef = useRef();

  const handleClearTimeout = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [time]);

  useEffect(() => {
    const fetchTripWeatherData = async () => {
      const tripWeatherData = await fetchWeatherData(
        trips.find(trip => trip.id === selectedTrip.id),
        false
      );

      setTripWeather(() => tripWeatherData);
    };

    const fetchTodayWeatherData = async () => {
      const todayWeatherData = await fetchWeatherData(
        trips.find(trip => trip.id === selectedTrip.id)
      );

      setTodayWeather(() => todayWeatherData);
    };

    fetchTripWeatherData();
    fetchTodayWeatherData();
  }, [selectedTrip]);

  function getTimeToTrip(id) {
    const trip = trips.find(trip => trip.id === id);
    // parsed start date minus 2 hours
    return (
      Date.parse(trip.startDate) - 2 * 3600 * 1000 - Date.parse(new Date())
    );
  }

  const handleTripFilter = e => {
    setTripFilter(() => e.target.value);
  };

  const handleSelectTrip = id => {
    setSelectedTrip(() => {
      const selectedTrip = trips.find(trip => trip.id === id);
      trips.forEach(trip => (trip.selected = false));
      selectedTrip.selected = true;
      return selectedTrip;
    });
    setDuration(getTimeToTrip(id));
    setTime(getTimeToTrip(id));
    handleClearTimeout();
  };

  const handleSortTrips = order => {
    setSortTrips(() => order);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const getTrips = () => {
    if (tripFilter)
      return trips.filter(trip =>
        trip.city.toLowerCase().startsWith(tripFilter.toLowerCase())
      );

    if (['asc', 'desc'].includes(sortTrips)) {
      const firstValue = sortTrips === 'asc' ? 1 : -1;

      return trips.sort((a, b) =>
        new Date(a.startDate).getTime() > new Date(b.startDate).getTime()
          ? firstValue
          : -firstValue
      );
    }

    return trips;
  };

  // Setting Context Values

  const tripValues = {
    trips: getTrips(),
    selectedTrip: selectedTrip,
    onSelectTrip: handleSelectTrip,
    onTripFilter: handleTripFilter,
    citiesList: citiesList,
    onSortTrips: handleSortTrips,
  };

  const weatherValues = {
    tripWeather: tripWeather,
    todayWeather: todayWeather,
  };

  const modalValues = {
    onOpenModal: toggleModal,
    onCloseModal: toggleModal,
    toggleModal: toggleModal,
  };

  const timeValues = {
    getWeekday: getWeekday,
    duration: duration,
    timeLeftObj: getFormattedTime(time),
  };

  if (
    Object.keys(todayWeather).length === 0 ||
    Object.keys(tripWeather).length === 0
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <TripContext.Provider value={tripValues}>
      <WeatherContext.Provider value={weatherValues}>
        <ModalContext.Provider value={modalValues}>
          <TimeContext.Provider value={timeValues}>
            <div className="app-container">
              <div className="layout-container">
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
};

export default App;
