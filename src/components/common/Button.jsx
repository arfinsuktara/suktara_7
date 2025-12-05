import React from 'react'

const Button = ({className,btnName}) => {
  return (
    <button className={`text-lg font-pop font-semibold ${className}`}>{btnName}</button>
  )
}

export default Button