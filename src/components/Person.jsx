const Person = ({firstName, lastName, occupation, country, city, avatar}) => {
  return (
    <div className="person-card">
      <div className="person-img-container">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="person-info">
        <p>name:{firstName}</p>
        <p>last name:{lastName}</p>
        <p>occupation:{occupation}</p>
        <p>country:{country}</p>
        <p>city:{city}</p>
      </div>
    </div>
  )
}

export default Person
