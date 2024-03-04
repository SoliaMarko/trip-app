import {
  getDateFromToday,
  convertDateToYYYYMMDD,
} from '../../../helpers/dateTimeManipulations';

const DateInput = ({ onInputDate, children }) => {
  const maxDateRange = 15;
  const minDate = convertDateToYYYYMMDD(new Date());
  const maxDate = convertDateToYYYYMMDD(getDateFromToday(maxDateRange));

  const changeDate = e => {
    onInputDate(e.target.value);
  };

  return (
    <div className="modal-input">
      <label className="required-label modal-label">{children}</label>
      <input type="date" min={minDate} max={maxDate} onChange={changeDate} />
    </div>
  );
};

export default DateInput;
