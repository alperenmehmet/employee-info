import Modal from './Modal'
import {useGlobalContext} from '../context'
import People from './People'
import {FaPlus} from 'react-icons/fa'

const Layout = () => {
  const {openModal} = useGlobalContext()

  return (
    <div>
      <div className="add-person-btn-container section-center">
        <button onClick={openModal} className="btn">
          <FaPlus /> ADD NEW
        </button>
      </div>
      <People />
      <Modal />
    </div>
  )
}

export default Layout
