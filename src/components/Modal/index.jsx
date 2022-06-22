import {useGlobalContext} from '../../context'
import {FaTimes} from 'react-icons/fa'
import Dropdown from '../Dropdown'
import {useState} from 'react'

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    people,
    setPeople,
    setSelectedCountry,
    selectedCountry,
  } = useGlobalContext()
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
    country: '',
    avatar: '',
    city: '',
  })

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
    if (
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
  }

  console.log(people)

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
              <label>first name:</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={person.firstName}
              />
            </div>
            <div>
              <label>last name:</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={person.lastName}
              />
            </div>
            <div>
              <label>occupation:</label>
              <input
                type="text"
                name="occupation"
                onChange={handleChange}
                value={person.occupation}
              />
            </div>
            <Dropdown
              name="country"
              onChange={handleChange}
              value={person.country}
            />
            <div>
              <label>city:</label>
              <input
                type="text"
                onChange={handleChange}
                value={person.city}
                name="city"
              />
            </div>
            <div>
              <label>avatar:</label>
              <input
                type="text"
                onChange={handleChange}
                value={person.avatar}
                name="avatar"
              />
            </div>
          </form>
        </div>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
        <button type="submit" className="btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  )
}

export default Modal
