import Modal from './Modal'
import {useGlobalContext} from '../context'
import People from './People'

const Layout = () => {
  const {openModal} = useGlobalContext()

  return (
    <div>
      <div className="add-person">
        <button onClick={openModal} className="btn">
          add new
        </button>
      </div>
      <People />
      <Modal />
    </div>
  )
}

export default Layout
