import './DropdownMenu.css';
import { useContext } from 'react';
import { TripContext } from '../../../App';

function DropdownMenu({ onInputCity, children }) {
  const { citiesList } = useContext(TripContext);

  function changeCity(e) {
    onInputCity(e.target.value);
  }

  return (
    <div className="modal-input">
      <label className="required-label modal-label">{children}</label>
      <select name="cities" id="cities" onChange={changeCity} defaultValue="">
        <option className="city-option" disabled={true} value="">
          Please select a city
        </option>
        {citiesList.map(city => (
          <option className="city-option" key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
