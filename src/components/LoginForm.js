import React, {useState} from 'react'
import PropTypes from 'prop-types'

const useField = ({type}) => {
 const [value, setValue] = useState('')

 const onChange = event => {
  setValue(event.target.value)
 }

 return {
  type,
  value,
  onChange
 }
}

export default function LoginForm ({handleSubmit}) {
  const username = useField({ type: 'text' })
  const password = useField({ type: 'password' })
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          //En vez de hacer uno por uno, utilizo el spred operator
          //type={username.type}
          //value={username.value}
          //onChange={username.onChange}
          {... username}
          name='Username'
          placeholder='Username'
        />
      </div>
      <div>
        <input
          {... password}
          name='Password'
          placeholder='Password'
        />
      </div>
      <button>
        Login
      </button>
    </form>  
  )}

  LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    username: PropTypes.string
  }