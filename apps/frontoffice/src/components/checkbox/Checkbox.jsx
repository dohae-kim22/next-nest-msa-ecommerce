import React from "react";

const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  ...restProps
}) => {
  return (
    <label style={{ fontSize: "1.3rem" }}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {label}
    </label>
  );
};

export default Checkbox;
