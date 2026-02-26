import React from 'react'

const Description =({classname,text,...props}) => {
  return (
    <p className={classname} {...props}> 
      {text}
    </p>
  )
}

export default Description