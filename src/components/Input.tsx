import { useState } from "react";
import { InputInterface } from "../interface/Input";
import ImageNext from "./Image";
import Text from "./Text";

// Author, Software Architect, Software Engineer, Software Developer : https://www.linkedin.com/in/wahyu-fatur-rizky

const Input = ({
  label,
  name,
  type,
  autoComplete,
  required,
  classNameInput,
  classNameLabel,
  onChange,
  onBlur,
  value,
  placeholder,
  error,
  prefixIcon,
  suffixIcon,
}: InputInterface) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className={classNameLabel}>
          {label}
          <span className="text-red">{required ? "*" : ""}</span>
        </label>
      )}

      {prefixIcon && (
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          {prefixIcon}
        </div>
      )}

      <div className={label ? "mt-2" : "mt-0"}>
        <input
          className={classNameInput}
          placeholder={placeholder}
          id={name}
          name={name}
          type={showPassword ? "text" : type}
          autoComplete={autoComplete}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
      {error && (
        <Text className="text-[#EB5757] font-roboto mt-2 font-bold text-sm" label={error.message} />
      )}

      {suffixIcon && (
        <div
          className={`absolute ${
            error ? "bottom-8" : "bottom-0"
          } right-0 flex items-center mr-3 cursor-pointer inset-y-0`}
        >
          {suffixIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
