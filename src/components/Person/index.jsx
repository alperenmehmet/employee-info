import {FaMapMarkerAlt, FaRegTrashAlt, FaEdit} from 'react-icons/fa'

const Person = ({firstName, lastName, occupation, country, city, avatar}) => {
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
          <FaRegTrashAlt />
        </a>
      </div>
    </div>
  )
}

export default Person
