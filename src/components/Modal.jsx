import { AiOutlineClose } from 'react-icons/ai'
const Modal = ({ modalVal, ToggleModal }) => {
  return (
    <div
      className={modalVal ? 'modal-container show-modal' : 'modal-container'}
    >
      <div className="modal">
        <button onClick={ToggleModal} className="modal-close-btn">
          <AiOutlineClose className="sidebar-close" />
        </button>
        <h2>Modal Content</h2>
      </div>
    </div>
  )
}
export default Modal
