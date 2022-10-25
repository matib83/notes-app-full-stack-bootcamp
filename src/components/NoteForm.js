import React, {useState} from 'react'

export default function NoteForm ({addNote, handleLogout}) {
  const [newNote, setNewNote] = useState('')

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
  }

  return (
    <div>
      <h3>Create a new note</h3>

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
    </div>
  )
}