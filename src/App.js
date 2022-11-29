import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { NoteDetail } from './components/NoteDetail'
import Notes from './Notes'
import Login from './Login'
import { useUser } from './hooks/useUser'
import { useNotes } from './hooks/useNotes'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  const {user} = useUser()
  const {notes} = useNotes()
  
  //const match = useRouteMatch('/notes/:id')
  
  return (
    <BrowserRouter>
      <header>
        <Link to='/' style={inlineStyles}>Home</Link>
        <Link to='/notes' style={inlineStyles}>Notes</Link>
        <Link to='/users' style={inlineStyles}>Users</Link>
        {
          user 
            ? <em>Logged as {user.name}</em>
            : <Link to='/login' style={inlineStyles}>Login</Link>
        }   
      </header>

      <Routes>
        <Route path='/login' element={<Login />}        />
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