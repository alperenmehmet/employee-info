import {useGlobalContext} from '../../context'

const Dropdown = () => {
  const {countries} = useGlobalContext()

  const sortByName = (arr) => {
    arr.sort((a, b) => {
      const firstCountry = a.name
      const secondCountry = b.name
      if (firstCountry < secondCountry) {
        return -1
      }
      if (firstCountry > secondCountry) {
        return 1
      }
      return 0
    })
    return arr
  }

  return (
    <div>
      <label htmlFor="">select country:</label>
      <select>
        <option value="select country">select country</option>
        {sortByName(countries).map((country, index) => {
          return <option key={index}>{country.name}</option>
        })}
      </select>
    </div>
  )
}

export default Dropdown
