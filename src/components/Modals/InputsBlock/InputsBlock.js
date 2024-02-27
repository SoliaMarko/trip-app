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
      <DropdownMenu citiesList={citiesList} onInputCity={onInputCity}>
        City
      </DropdownMenu>
      <DateInput onInputDate={onInputStartDate}>Start date</DateInput>
      <DateInput onInputDate={onInputEndDate}>End date </DateInput>
    </div>
  );
}

export default InputsBlock;
