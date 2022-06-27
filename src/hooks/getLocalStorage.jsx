export const getLocalStorage = () => {
  let people = localStorage.getItem('people')
  if (people) {
    return (people = JSON.parse(localStorage.getItem('people')))
  } else {
    return []
  }
}
