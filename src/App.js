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
    //Para evitar el comportamiento por defecto que tiene el ancor al ser clickeado 
    //que es intentar navegar al la direccion indicada por href
    event.preventDefault()
    //history es una variable global del objeto global windows
    window.history.pushState(null, '', `/${page}`)
    console.log(page)
    setPage(page)
  }

  return (
    <BrowserRouter>
      <header>
        <Link to='#' onClick={toPage('home')} style={inlineStyles}>
          Home
        </Link>
        <Link to='#' onClick={toPage('notes')} style={inlineStyles}>
          Notes
        </Link>
        <Link to='#' onClick={toPage('users')} style={inlineStyles}>
          Users
        </Link>
      </header>
      {getContent()}
    </BrowserRouter>
  )
}

export default App