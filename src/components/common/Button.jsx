import React from 'react'

const Button = ({ className, btnName, ...props }) => {
  return (
    <button className={`text-lg font-pop font-semibold ${className}`} {...props}>{btnName}</button>
  )
}

export default Button