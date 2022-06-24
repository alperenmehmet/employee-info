import {FaMapMarkerAlt, FaRegTrashAlt, FaEdit} from 'react-icons/fa'
import {useGlobalContext} from '../../context'

const Person = ({
  id,
  firstName,
  lastName,
  occupation,
  country,
  city,
  avatar,
}) => {
  const {deletePerson} = useGlobalContext()

  return (
    <div className="person-card">
      <div className="person-img-container">
        <img src={avatar} alt="avatar" />
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
          <FaEdit />
        </a>
        <a className="person-card-buttons-delete">
          <FaRegTrashAlt onClick={() => deletePerson(id)} />
        </a>
      </div>
    </div>
  )
}

export default Person
