import {useGlobalContext} from '../context'
import {FaTimes} from 'react-icons/fa'
const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <div>
          <form action="">
            <div>
              <label htmlFor="">first name:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">last name:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">occupation:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">country:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">city:</label>
              <input type="text" />
            </div>
          </form>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  )
}

export default Modal
