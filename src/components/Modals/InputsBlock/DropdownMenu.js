function DropdownMenu({ citiesList, onInputCity }) {
  function changeCity(e) {
    onInputCity(e.target.value);
  }

  return (
    <div className="modal-input">
      <p></p>
      <select name="cities" id="cities" onChange={changeCity}>
        {citiesList.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
