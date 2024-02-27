import {
  getDateFromToday,
  convertDateToYYYYMMDD,
} from '../../../helpers/dateTimeManipulations';

function DateInput({ children, onInputDate }) {
  const maxDateRange = 15;
  const minDate = convertDateToYYYYMMDD(new Date());
  const maxDate = convertDateToYYYYMMDD(getDateFromToday(maxDateRange));

  function changeDate(e) {
    onInputDate(e.target.value);
  }

  return (
    <div className="modal-input">
      <label className="required-label">{children}</label>
      <input type="date" min={minDate} max={maxDate} onChange={changeDate} />
    </div>
  );
}

export default DateInput;
