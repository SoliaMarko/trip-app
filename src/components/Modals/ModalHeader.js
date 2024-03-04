import './ModalHeader.css';
import { useContext } from 'react';
import { ModalContext } from '../../App';

function ModalHeader() {
  const { onCloseModal } = useContext(ModalContext);

  return (
    <div className="modal-header">
      <h3>Create Trip</h3>
      <button onClick={onCloseModal}>❌</button>
    </div>
  );
}

export default ModalHeader;
