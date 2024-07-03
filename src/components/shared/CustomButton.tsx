import React from "react";
import { Button, styled } from "@mui/material";

interface ButtonProps {
  variant: "outlined" | "contained" | "text";
  onClick?: () => void;
  buttonText: string;
  disableElevation?: boolean;
  className?: string;
  type: "submit" | "button";
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const {
    variant,
    onClick,
    buttonText,
    disableElevation = false,
    className,
    type = "button",
    startIcon,
    endIcon,
  } = props;
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      disableElevation={disableElevation}
      className={className}
    >
      {startIcon}
      {buttonText}
      {endIcon}
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter",
  padding: "8px 12px",
  borderRadius: "8px",
  borderColor: "#0158D8",
  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
  fontWeight: 600,
  fontSize: "14px",
  textTransform: "capitalize",
}));
