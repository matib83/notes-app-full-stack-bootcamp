import React, {useState} from 'react'

export default function LoginForm ({username, password, handleUsernameChange, handlePasswordChange, handleSubmit}) {
  const [loginVisible, setLoginVisible] = useState(false)
  
const hideWhenVisible = { display: loginVisible ? 'none' : ''}
const showWhenVisible = { display: loginVisible ? '' : 'none'}

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setLoginVisible(true)}>Show login</button>
      </div>

      <div style={showWhenVisible}>
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
        <button onClick={() => setLoginVisible(false)}>Cancel</button>
      </div>
    </div>
  )}