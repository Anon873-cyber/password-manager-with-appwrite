import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import loginStore from '../../features/LoginStore'



function AuthLayout({ children, authentication, }) {

  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const user = loginStore((state) => state.loginStatus )

  useEffect(() => {
   
    if (authentication && user !== authentication) {

      navigate('/login')
    
    } else if (!authentication && user !== authentication) {
      navigate('/')
    }
    setLoading(false)

  }, [user,authentication,navigate])

  return loading ? <div>Loading...</div> : children;

}

export default AuthLayout