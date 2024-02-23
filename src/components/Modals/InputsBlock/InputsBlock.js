import { useState } from 'react';
import DateInput from './DateInput';
import DropdownMenu from './DropdownMenu';

function InputsBlock({
  citiesList,
  onInputCity,
  onInputStartDate,
  onInputEndDate,
}) {
  return (
    <div className="modal-inputs">
      <DropdownMenu
        citiesList={citiesList}
        onInputCity={onInputCity}
      ></DropdownMenu>
      <DateInput onInputDate={onInputStartDate}></DateInput>
      <DateInput onInputDate={onInputEndDate}></DateInput>
    </div>
  );
}

export default InputsBlock;
