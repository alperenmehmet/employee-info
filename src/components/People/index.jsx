import {useGlobalContext} from '../../context'
import Person from '../Person'

const People = () => {
  const {people} = useGlobalContext()

  return (
    <div className="people-container">
      {people?.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}

export default People
