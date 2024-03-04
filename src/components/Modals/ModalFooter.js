import './ModalFooter.css';
import { useContext } from 'react';
import { ModalContext } from '../../App';

function ModalFooter({ onSaveNewTrip }) {
  const { onCloseModal } = useContext(ModalContext);

  return (
    <div className="modal-footer">
      <div className="buttons-container">
        <button className="close-btn" onClick={onCloseModal}>
          Cancel
        </button>
        <button className="save-btn" onClick={onSaveNewTrip}>
          Save
        </button>
      </div>
    </div>
  );
}

export default ModalFooter;
