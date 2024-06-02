import React from 'react'

interface ButtonProps {
    onClick?: () => void;
    className?: string;
    label: string | JSX.Element;
}

const Button:React.FC<ButtonProps> = ({ onClick, className, label }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  )
}

export default Button
