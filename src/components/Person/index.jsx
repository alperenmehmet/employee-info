import {FaMapMarkerAlt, FaRegTrashAlt, FaEdit} from 'react-icons/fa'
import {useGlobalContext} from '../../context'
import defaultAvatar from '../../assets/avatar.png'

const Person = ({
  id,
  firstName,
  lastName,
  occupation,
  country,
  city,
  avatar,
}) => {
  const {deletePerson, editPerson} = useGlobalContext()

  return (
    <div className="person-card">
      <div className="person-img-container">
        <img src={avatar ? avatar : defaultAvatar} alt="avatar" />
      </div>
      <div className="person-info">
        <p className="person-info-name">
          {firstName} {lastName}
        </p>
        <p className="person-info-occupation">{occupation}</p>
        <p className="person-info-location">
          <FaMapMarkerAlt className="person-info-location-icon" />
          {city} - {country}
        </p>
      </div>
      <div className="person-card-buttons">
        <a className="person-card-buttons-edit">
          <FaEdit onClick={() => editPerson(id)} />
        </a>
        <a className="person-card-buttons-delete">
          <FaRegTrashAlt onClick={() => deletePerson(id)} />
        </a>
      </div>
    </div>
  )
}

export default Person
