import { useCallback, useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <div className='App'>
      <button onClick={openModal} className='button'>
        Click To See Modal
      </button>
      {showModal ? (
        <Modal>
          <div className='modal-container'>
            <div class='modal'>
              <h1>I'm a modal!</h1>
              <button onClick={closeModal} className='close-button'></button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
