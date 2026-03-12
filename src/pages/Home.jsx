import React, { useState, useEffect } from 'react'
import PasswordForm from '../components/PostForm/PasswordForm'
import service from '../appwrite/config'
import conf from '../conf/conf'

function Home() {
  const [passwords, setPasswords] = useState([])

  useEffect(() => {
    service.getpasswords(conf.appwriteDatabaseId).then((response) => {
      if (response) {
        console.log(response)
        setPasswords(passwords)
      }
    })

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
              <p>item</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home