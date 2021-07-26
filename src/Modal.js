import { createPortal } from 'react-dom';
let modalRoot;

const Modal = ({ children }) => {
  modalRoot = modalRoot ? modalRoot : document.querySelector('#modal');
  createPortal(children, modalRoot);
};

export default Modal;
