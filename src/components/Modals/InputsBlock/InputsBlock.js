import './InputsBlock.css';
import { useContext } from 'react';
import DateInput from './DateInput';
import DropdownMenu from './DropdownMenu';
import { TripContext } from '../../../App';

const InputsBlock = ({ onInputCity, onInputStartDate, onInputEndDate }) => {
  const { citiesList } = useContext(TripContext);

  return (
    <div className="modal-inputs">
      <DropdownMenu citiesList={citiesList} onInputCity={onInputCity}>
        City
      </DropdownMenu>
      <DateInput onInputDate={onInputStartDate}>Start date</DateInput>
      <DateInput onInputDate={onInputEndDate}>End date</DateInput>
    </div>
  );
};

export default InputsBlock;
