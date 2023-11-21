import React from 'react'
import './Button.css'


interface ButtonProps {
    children: React.ReactNode
    width: string,
    height: string,
    shadow?: string,
    onClick?: () => void
}
function Button({children, width, height, shadow, onClick}: ButtonProps) {
  return (
    <button 
    className=
    {`button`} 
    style={{width: width, height: height, boxShadow: shadow }}
     onClick={onClick}>
       {children}
  
    </button>
  )
}

export default Button
