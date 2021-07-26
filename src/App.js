import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const handleFindDOMNode = () => {
    const node = document.querySelector('.node');
    ReactDOM.findDOMNode(node).style.backgroundColor = 'black';
  };

  const handleUnmount = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
  };

  return (
    <div className='App'>
      <button onClick={openModal} className='button node'>
        Click To See Modal
      </button>
      <button onClick={handleFindDOMNode} className='button'>
        Find The Button Element and Make It Black
      </button>
      <button onClick={handleUnmount} className='button'>
        Unmount App
      </button>
      {showModal ? (
        <Modal>
          <div className='modal-container'>
            <div className='modal'>
              <h1>I'm a modal!</h1>
              <button onClick={closeModal} className='close-button'></button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default App;
