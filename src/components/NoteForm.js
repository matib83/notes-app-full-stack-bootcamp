import React from 'react'

export default function NoteForm ({handleSummit, newNote, handleNoteChange, handleLogout}) {
  return (
    <div>
      <form onSubmit={handleSummit}>
        <input
          placeholder='Write your note content'
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <div>
        <button onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div> 
    </div>
  )
}