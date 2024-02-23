function ModalHeader({ onCloseModal }) {
  return (
    <div className="modal-header">
      <p>Create Trip</p>
      <button onClick={onCloseModal}>❌</button>
    </div>
  );
}

export default ModalHeader;
