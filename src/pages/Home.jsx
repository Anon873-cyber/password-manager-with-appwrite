import React, { useState, useEffect } from 'react'
import PasswordForm from '../components/PostForm/PasswordForm'
import service from '../appwrite/config'

function Home() {
  const [passwords, setPasswords] = useState([])

  useEffect(() => {
    const response = service.getpasswords()    
    if (response) {
      setPasswords(passwords)
    }

  }, [])

  return (
    <div>
      <PasswordForm />

      <h2>Your Previous Passwords</h2>

      {passwords.length === 0 ? (
        <p>No saved passwords</p>
      ) : (

        <ul>
          {passwords.map((item, index) => (
          <div>
           <p></p>
          </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home