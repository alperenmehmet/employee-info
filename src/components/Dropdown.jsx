import {useGlobalContext} from '../context'
import {useState} from 'react'

const Dropdown = () => {
  const {countries} = useGlobalContext()
  const [selectedCountry, setSelectedCountry] = useState('')

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

  const handleChange = (e) => {
    const value = e.target.value
    if (value !== 'select country') {
      setSelectedCountry(value)
    }
  }

  return (
    <div>
      <label htmlFor="">select country:</label>
      <select onChange={handleChange} value={selectedCountry}>
        <option value="select country">select country</option>
        {sortByName(countries).map((country, index) => {
          return <option key={index}>{country.name}</option>
        })}
      </select>
    </div>
  )
}

export default Dropdown
