import React, { useState, useEffect } from 'react'
import PasswordForm from '../components/PostForm/PasswordForm'
import service from '../appwrite/config'
import conf from '../conf/conf'

function Home() {
  const [passwords, setPasswords] = useState([])

  useEffect(() => {
    service.getpasswords(conf.appwriteDatabaseId).then((response) => {
      if (response) {
        setPasswords(response)
      }
    })
  }, [])

  useEffect(() => {

    console.log(passwords, "state")

  }, [passwords])


  return (
    <div className='mt-15'>
      <PasswordForm />

      <h2 className="text-xl font-bold mb-4 text-center mt-8">
        Your Previous Passwords
      </h2>

      {passwords.length === 0 ? (
        <p className="text-center ">No saved passwords</p>
      ) : (

        <div className='h-[350px] overflow-auto'>

          <table className="w-full table-fixed text-left">
            <thead className="bg-[#016538] text-white">
              <tr>
                <th className="p-3">Site</th>
                <th className="p-3">Username</th>
                <th className="p-3">Password</th>
                <th className="p-3">URL</th>
              </tr>
            </thead>

            <tbody>
              {passwords.map((item) => (
                <tr key={item.$id} className="hover:bg-gray-50">
                  <td className="p-3 truncate">{item.siteName || "No named"}</td>
                  <td className="p-3 truncate">{item.username}</td>
                  <td className="p-3 truncate">{item.password}</td>
                  <td className="p-3 truncate">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 underline"
                    >
                      {item.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default Home