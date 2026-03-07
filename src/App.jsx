import { useState, useEffect } from 'react'

import authService from './appwrite/auth.js'

import './App.css'
import Header from './components/Shared/Header/Header.jsx'
import Footer from './components/Shared/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

import loginStore from './features/LoginStore.js'

function App() {

  const [loading, setLoading] = useState(true)

  const login = loginStore((state) => state.login)
  const logout = loginStore((state) => state.logout)

  useEffect(() => {

    authService.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          login(userdata)
        } else {
          logout()
        }
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return !loading ? (
    <div className='h-screen'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App