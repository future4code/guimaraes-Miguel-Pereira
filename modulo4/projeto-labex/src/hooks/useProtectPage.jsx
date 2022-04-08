import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useProtectPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    // axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/miguel-pereira-guimaraes/login',
    // { 
    //   headers: {
    //     auth: token
    //   }
    // })
    // .then()
    // .catch()
    if (token === null || undefined) {
      console.log('USER NÃO ESTÁ LOGADE')
      navigate('/login-page')
    }
  }, [navigate])
}

export default useProtectPage