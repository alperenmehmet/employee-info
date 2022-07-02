import {data} from '../data'

export const getLocalStorage = () => {
  return localStorage.getItem('people')
    ? JSON.parse(localStorage.getItem('people'))
    : data
}
