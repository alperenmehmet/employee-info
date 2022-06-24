import {useGlobalContext} from '../../context'

const Dropdown = ({handleChange, value, name}) => {
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
      <select name="country" onChange={handleChange} value={value}>
        <option value="select country" className="select-country">
          SELECT COUNTRY
        </option>
        {sortByName(countries).map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown
