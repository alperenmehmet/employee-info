import {useEffect} from 'react'

const Alert = ({type, message, removeAlert, people}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [people])
  return <p className={`alert alert-${type}`}>{message}</p>
}

export default Alert
