import InputsBlock from './InputsBlock/InputsBlock';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';

function Modal() {
  return (
    <>
      <form className="modal">
        <ModalHeader />
        <hr />
        <InputsBlock />
        <hr />
        <ModalFooter />
      </form>
    </>
  );
}

export default Modal;
