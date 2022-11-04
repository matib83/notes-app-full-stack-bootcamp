import React from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'

export default function LoginForm ({username, password, handleUsernameChange, handlePasswordChange, handleSubmit}) {

  return (
    <Togglable buttonLabel='Show Login'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={handlePasswordChange}
          />
        </div>
        <button>
          Login
        </button>
      </form>  
    </Togglable>
  )}

  LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    username: PropTypes.string
  }