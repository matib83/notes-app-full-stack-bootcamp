import React, {useRef, useState} from 'react'
import Togglable from './Togglable'

export default function NoteForm ({addNote, handleLogout}) {
  const [newNote, setNewNote] = useState('')
  const elementRef = useRef()
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSummit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    addNote(noteObject)
    setNewNote('')
    togglableRef.current.toggleVisibility()
  }

  console.log(elementRef)
  console.log(togglableRef)

  return (
    <Togglable buttonLabel='New Note' ref={togglableRef}>
      <h3 ref={elementRef}>Create a new note</h3> 

      <form onSubmit={handleSummit}>
        <input
          placeholder='Write your note content'
          value={newNote}
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
      <div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div> 
    </Togglable>
  )
}