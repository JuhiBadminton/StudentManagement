import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // This is to set the root element for accessibility

function MyModal(props) {
  return (
    <ReactModal isOpen={props.isOpen} onRequestClose={props.onClose}>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
      <button onClick={props.handleButtonClick}>Button 1</button>
      <button onClick={props.handleCloseModal}>Close Modal</button>
    </ReactModal>
  );
}

export default MyModal;
