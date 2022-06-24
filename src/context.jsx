import React, {useContext, useEffect, useState} from 'react'
import {data} from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [countries, setCountries] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [people, setPeople] = useState(data)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
    country: '',
    avatar: '',
    city: '',
  })

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
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

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  }

  return (
    <AppContext.Provider
      value={{
        countries,
        isModalOpen,
        openModal,
        closeModal,
        people,
        setPeople,
        selectedCountry,
        setSelectedCountry,
        deletePerson,
        person,
        setPerson,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
