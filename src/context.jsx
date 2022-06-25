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
  const [editId, setEditId] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

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

  const editPerson = (id) => {
    const editingPerson = people.find((person) => person.id === id)
    setPerson(editingPerson)
    setEditId(id)
    setIsEditing(true)
  }

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people))
  }, [])

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
        editId,
        setEditId,
        isEditing,
        setIsEditing,
        editPerson,
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
