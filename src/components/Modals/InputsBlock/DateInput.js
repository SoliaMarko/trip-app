import getDateFromToday from '../../../helpers/dateManipulations';

function DateInput({ onInputDate }) {
  const maxDateRange = 15;
  const minDate = new Date();
  const maxDate = getDateFromToday(maxDateRange);

  function changeDate(e) {
    onInputDate(e.target.value);
  }

  return (
    <div className="modal-input">
      <label></label>
      <input type="date" onChange={changeDate} />
    </div>
  );
}

export default DateInput;
