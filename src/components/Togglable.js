import React, {forwardRef, useImperativeHandle, useState} from 'react'
import PropTypes from 'prop-types'

const Togglable = forwardRef(({children, buttonLabel}, ref) => {
  const [visible, setVisible] = useState(false)
  
  const hideWhenVisible = { display: visible ? 'none' : ''}
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
  
  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>

      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  )
})

// esto sirve para que al saltar el warning siempre me indique el nombre del componente (ya que uso ForwardRef)
Togglable.displayName = 'Togglable' 

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable