import React from 'react'

const Menu = ({className,menuName}) => {
  return (
   
      <li className={`text-2xl font-pop font-semibold ${className}`}>{menuName}</li>
  
  )
}

export default Menu