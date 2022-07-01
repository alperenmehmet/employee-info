import {useGlobalContext} from '../../context'
import {FaTimes} from 'react-icons/fa'
import Dropdown from '../Dropdown'
import Alert from '../Alert'

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    people,
    setPeople,
    setSelectedCountry,
    person,
    setPerson,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
    alert,
    setAlert,
    formErrors,
    setFormErrors,
  } = useGlobalContext()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (value !== 'select country') {
      setSelectedCountry(value)
    }
    setPerson({...person, [name]: value})
  }

  const handleClick = (e) => {
    e.preventDefault()
    setFormErrors(validate(person))
    if (
      person.firstName &&
      person.lastName &&
      person.occupation &&
      person.city &&
      person.avatar &&
      person.country &&
      isEditing === true
    ) {
      setPeople(
        people.map((item) => {
          if (item.id === editId) {
            return {
              ...person,
            }
          }
          return item
        })
      )
      setEditId(null)
      setPerson({
        firstName: '',
        lastName: '',
        occupation: '',
        country: '',
        avatar: '',
        city: '',
      })
      setIsEditing(false)
    } else if (
      person.firstName &&
      person.lastName &&
      person.occupation &&
      person.city &&
      person.avatar &&
      person.country
    ) {
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({
        firstName: '',
        lastName: '',
        occupation: '',
        country: '',
        avatar: '',
        city: '',
      })
    }
    closeModal()
  }

  const validate = (values) => {}

  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <div>
          <form>
            <div>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={person.firstName}
                placeholder="FIRST NAME"
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={person.lastName}
                placeholder="LAST NAME"
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                name="occupation"
                onChange={handleChange}
                value={person.occupation}
                placeholder="OCCUPATION"
                className="input"
              />
            </div>
            <Dropdown
              name="country"
              value={person.country}
              handleChange={handleChange}
              className="input"
            />
            <div>
              <input
                type="text"
                onChange={handleChange}
                value={person.city}
                name="city"
                placeholder="CITY"
                className="input"
              />
            </div>
            <div>
              <input
                type="text"
                onChange={handleChange}
                value={person.avatar}
                name="avatar"
                placeholder="AVATAR URL"
                className="input"
              />
            </div>
          </form>
        </div>
        <button className="close-modal-btn" onClick={() => closeModal()}>
          <FaTimes></FaTimes>
        </button>
        <button type="submit" className="btn" onClick={handleClick}>
          {isEditing ? 'Edit Person' : 'Add Person'}
        </button>
      </div>
    </div>
  )
}

export default Modal
