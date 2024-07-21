import { ErrorMessage, Field } from "formik";
import React from "react";

interface TextInputProps {
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  htmlFor?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  name,
  placeholder,
  htmlFor,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor={htmlFor} className="text-[#1C1C1C] font-medium text-sm">
          {label}
        </label>
        <Field
          className="outline outline-2 focus:outline-[#016FED] px-4 w-full h-[40px] placeholder:font-normal placeholder:text-sm custom-placeholder rounded-md"
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <ErrorMessage name={name}>
          {(errorMessage) => (
            <span className="text-xs text-red-500">{errorMessage}</span>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default TextInput;
