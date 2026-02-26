import React from 'react'

const Button = ({classname,type,children,...props}) => {
  return (
   <Button type={type} classname={classname}{...props}>{children}</Button>
  )
}

export default Button