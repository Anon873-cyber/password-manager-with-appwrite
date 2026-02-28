import React from 'react'

const Button = ({
  className = '',
  type = 'button',
  children,
  icon = null,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}

      {children}

      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button