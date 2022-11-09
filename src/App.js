import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { NoteDetail } from './components/NoteDetail'
import Notes from './Notes'
import noteService from './services/notes'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  return (
    <BrowserRouter>
      <header>
        <Link to='/' style={inlineStyles}>home</Link>
        <Link to='/notes' style={inlineStyles}>notes</Link>
        <Link to='/users' style={inlineStyles}>users</Link>
      </header>

      <Routes>
        <Route path='/notes/:noteId' element={<NoteDetail notes={notes}/>} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={<Users />} />
        <Route path='/' element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2022</i>
      </div>
    </BrowserRouter>
  )
}

export default App