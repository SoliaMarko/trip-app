import { useContext } from 'react';
import { ModalContext, TripContext } from '../../../App';

function DropdownMenu({ children }) {
  const { onInputCity } = useContext(ModalContext);
  const { citiesList } = useContext(TripContext);

  function changeCity(e) {
    onInputCity(e.target.value);
  }

  return (
    <div className="modal-input">
      <label className="required-label">{children}</label>
      <select name="cities" id="cities" onChange={changeCity} defaultValue="">
        <option disabled={true} value="">
          Please select a city
        </option>
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
