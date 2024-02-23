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
      <div className="modal">
        <ModalHeader onCloseModal={onCloseModal}></ModalHeader>
        <hr />
        <InputsBlock
          citiesList={citiesList}
          onInputCity={onInputCity}
          onInputStartDate={onInputStartDate}
          onInputEndDate={onInputEndDate}
        ></InputsBlock>
        <hr />
        <ModalFooter
          onCloseModal={onCloseModal}
          onSaveNewTrip={onSaveNewTrip}
        ></ModalFooter>
      </div>
    </>
  );
}

export default Modal;
