function ModalFooter({ onCloseModal, onSaveNewTrip }) {
  return (
    <div className="modal-footer">
      <button onClick={onCloseModal}>Cancel</button>
      <button onClick={onSaveNewTrip}>Save</button>
    </div>
  );
}

export default ModalFooter;
