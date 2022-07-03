import {useGlobalContext} from '../../context'
import {FaTimes} from 'react-icons/fa'
import Dropdown from '../Dropdown'
import {useEffect} from 'react'

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
    formErrors,
    setFormErrors,
    isSubmit,
    setIsSubmit,
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
    if (
      person.firstName &&
      person.lastName &&
      person.occupation &&
      person.city &&
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
        city: '',
      })
      setIsEditing(false)
      closeModal()
    } else if (
      person.firstName &&
      person.lastName &&
      person.occupation &&
      person.city &&
      person.country
    ) {
      const newPerson = {...person, id: new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({
        firstName: '',
        lastName: '',
        occupation: '',
        country: '',
        city: '',
      })
    } else {
      setIsSubmit(true)
      setFormErrors(validate(person))
    }
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormErrors(validate(person))
    }
  }, [])

  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'First name is required!'
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required!'
    }
    if (!values.occupation) {
      errors.occupation = 'Occupation is required!'
    }
    if (!values.country) {
      errors.country = 'Country is required!'
    }
    if (!values.city) {
      errors.city = 'City is required!'
    }
    return errors
  }

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
              <p className="error">
                {!person.firstName ? formErrors.firstName : ''}
              </p>
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
              <p className="error">
                {!person.lastName ? formErrors.lastName : ''}
              </p>
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
              <p className="error">
                {!person.occupation ? formErrors.occupation : ''}
              </p>
            </div>
            <Dropdown
              name="country"
              value={person.country}
              handleChange={handleChange}
              className="input"
            />
            <p className="error">{!person.country ? formErrors.country : ''}</p>
            <div>
              <input
                type="text"
                onChange={handleChange}
                value={person.city}
                name="city"
                placeholder="CITY"
                className="input"
              />
              <p className="error">{!person.city ? formErrors.city : ''}</p>
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
              <p className="error">{!person.avatar ? formErrors.avatar : ''}</p>
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
