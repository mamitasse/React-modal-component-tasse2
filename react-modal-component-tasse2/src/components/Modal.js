// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Assurez-vous de créer un fichier CSS pour le style

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="modal-close-button croix">
            &times;
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;