import React from 'react'

const Button = ({classname,type,children,...props}) => {
  return (
   <button type={type} className={classname}{...props}>{children}</button>
  )
}

export default Button