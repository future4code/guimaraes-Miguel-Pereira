
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const confirmEmail = (e) => {
    setEmail(e.target.value)
  }

  const confirmPassword = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    console.log(email, password)

    const body = {
      email: email,
      password: password
    }

    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/miguel-pereira-guimaraes/login', body)
      .then(res => {
        console.log('Deu certo: ', res.data.token)
        localStorage.setItem('token', res.data.token)
        navigate('/admin/trips/list')
      })
      .catch(err => {
        console.log('Deu ruim: ', err.response)
        alert('Login ou senha invalidos')
        })

  }

  return (
    <div>
      <button onClick={goToHomePage}>Home</button>
      <div>
        <input placeholder="E-mail" value={email} onChange={confirmEmail} />
        <input placeholder="Senha" value={password} onChange={confirmPassword} />
        <button onClick={login}> Entrar </button>
      </div>
    </div>
  )
}

export default LoginPage