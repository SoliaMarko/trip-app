function ModalHeader({ onCloseModal }) {
  return (
    <div className="modal-header">
      <h3>Create Trip</h3>
      <button onClick={onCloseModal}>❌</button>
    </div>
  );
}

export default ModalHeader;
