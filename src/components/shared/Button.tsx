import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string | JSX.Element;
  children?: string | JSX.Element | React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  label,
  children,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
      {children}
    </button>
  );
};

export default Button;
