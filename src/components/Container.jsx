import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-menuContainer mx-auto ${className}`}>{children}</div>
  )
}

export default Container