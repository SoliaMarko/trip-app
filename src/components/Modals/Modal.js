import InputsBlock from './InputsBlock/InputsBlock';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';

function Modal({
  citiesList,
  onCloseModal,
  onInputCity,
  onInputStartDate,
  onInputEndDate,
  onSaveNewTrip,
}) {
  return (
    <>
      <form className="modal">
        <ModalHeader onCloseModal={onCloseModal} />
        <hr />
        <InputsBlock
          citiesList={citiesList}
          onInputCity={onInputCity}
          onInputStartDate={onInputStartDate}
          onInputEndDate={onInputEndDate}
        />
        <hr />
        <ModalFooter
          onCloseModal={onCloseModal}
          onSaveNewTrip={onSaveNewTrip}
        />
      </form>
    </>
  );
}

export default Modal;
