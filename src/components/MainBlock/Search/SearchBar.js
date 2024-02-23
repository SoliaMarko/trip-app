import React, { useState } from 'react';

const SearchBar = () => {
  const [tripCity, setTripCity] = useState('');

  const onSubmitForm = async e => {
    if (!tripCity) return;
    e.preventDefault();
    try {
      const body = { tripCity };
      await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1>
        Weather <b>Forecast</b>
      </h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Search your trip"
          value={tripCity}
          onChange={e => setTripCity(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default SearchBar;
