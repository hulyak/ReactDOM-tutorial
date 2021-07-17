import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal');

const Modal = ({ children }) => createPortal(children, modalRoot);

export default Modal;
