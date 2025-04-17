import { useState } from "react";
import styles from "./Input.module.scss";

const Input = ({
  id,
  label,
  name = "",
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readOnly,
  disabled,
  value,
  error: errorProp,
  className = "",
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkType = () => {
    if (email) return "email";
    if (password) return isPasswordVisible ? "text" : "password";
    return "text";
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const iconType = isPasswordVisible ? "eye" : "eye-off";
  const iconLabel = isPasswordVisible ? "Hide password" : "Show password";

  return (
    <div>
      <label htmlFor="id">{label}</label>

      <div>
        {/* {icon ? <Icon /> : null} */}
        <input
          id={id}
          type={checkType()}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />

        {password ? (
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
          >
            {/* <Icon type={iconType} alt={iconLabel} title={iconLabel} /> */}
          </button>
        ) : null}
      </div>
      {errorProp && (
        <span role="alert" className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  );
};

export default Input;
