import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Home = () => <h1>Home Page</h1>

const Notes = () => <h1>Notes</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  const [page, setPage] = useState(() => {
    const {pathname} = window.location
    const page = pathname.slice(1)  //para quitar el / inicial del pathname
    return page
  })

  const getContent = () => {
    if (page === 'users') { 
      return <Users />
    } else if (page === 'notes') {
      return <Notes />
    } else {
      return <Home />
    }
  }

  const toPage = page => event => {
    console.log(page)
    setPage(page)
  }

  return (
    <BrowserRouter>
      <header>
        <Link to='/home' onClick={toPage('home')} style={inlineStyles}>
          Home
        </Link>
        <Link to='/notes' onClick={toPage('notes')} style={inlineStyles}>
          Notes
        </Link>
        <Link to='/users' onClick={toPage('users')} style={inlineStyles}>
          Users
        </Link>
      </header>
      {getContent()}
    </BrowserRouter>
  )
}

export default App