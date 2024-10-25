import React from 'react'

const Image = ({imgSrc,imgAlt,className}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={`${className}`}/>
  )
}

export default Image