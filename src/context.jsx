import React, {useContext, useEffect, useState} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((country) => {
          const {
            name: {common},
          } = country
          return {
            name: common,
          }
        })
        setCountries(newData)
      })
  }, [])

  console.log(countries)
  return (
    <AppContext.Provider value={{countries}}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
