import React from 'react';
import LoginRegister from '../components/LoginRegister';
import '../components/AuthModal.css';

function AuthModal({ onAuthSuccess, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <LoginRegister onAuthSuccess={onAuthSuccess} />
      </div>
    </div>
  );
}

export default AuthModal;
