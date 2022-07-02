import React, {useContext, useEffect, useState} from 'react'
import {getLocalStorage} from './hooks/getLocalStorage'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [countries, setCountries] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [people, setPeople] = useState(getLocalStorage())
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
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (isEditing) {
      setIsEditing(false)
      setPerson({
        firstName: '',
        lastName: '',
        occupation: '',
        country: '',
        avatar: '',
        city: '',
      })
    }
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
    openModal()
  }

  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people))
  }, [people])

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
        formErrors,
        setFormErrors,
        isSubmit,
        setIsSubmit,
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
