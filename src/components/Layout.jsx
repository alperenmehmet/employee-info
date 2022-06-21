import Modal from './Modal'
import {useGlobalContext} from '../context'

const Layout = () => {
  const {openModal} = useGlobalContext()

  return (
    <div>
      <button onClick={openModal} className="btn">
        show modal
      </button>
      <Modal />
    </div>
  )
}

export default Layout
