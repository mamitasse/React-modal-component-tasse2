// src/App.js
import React, { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>React Modal Example</h1>
      <button onClick={openModal} className="open-modal-button">
        Open Modal
      </button>
      <Modal show={showModal} onClose={closeModal} title="Example Modal">
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default App;
