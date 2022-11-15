import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import loginService from './services/login'
import noteService from './services/notes'
import {useNavigate } from 'react-router-dom'

export default function Login () {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  console.log(user)

  const HandleLogin = async (event) => {
    event.preventDefault()
    //console.log('THIS IS SUBMIT!')
    try {
      const user = await loginService.login({
        username,
        password
      })

      //console.log(user)
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )

      noteService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('') 

      navigate('/notes')
    } catch(e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }

  if (user) {
    return <p>User is logged</p>
  }

  return (
    <LoginForm 
      username={username} 
      password={password}
      handleUsernameChange={
        (event) => setUsername(event.target.value)}
      handlePasswordChange={
        ({target}) => setPassword(target.value)}
      handleSubmit={HandleLogin}
    />
  )
}