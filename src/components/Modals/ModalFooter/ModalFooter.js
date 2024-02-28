import { useContext } from 'react';
import { ModalContext, TripContext } from '../../../App';

function ModalFooter() {
  const { onCloseModal } = useContext(ModalContext);
  const { onSaveNewTrip } = useContext(TripContext);

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
