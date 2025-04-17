import Checkbox from "../checkbox/Checkbox";
import Tooltip from "../tooltip/Tooltip";
import styles from "./AutoSignInCheckbox.module.scss";

const AutoSignInCheckbox = ({
  label = "Stay signed in",
  checked,
  disabled,
  orientation = "top",
  onChange,
  message = "For your security, use this only on trusted devices.",
  ...restProps
}) => {
  return (
    <span className={styles.checkboxContainer}>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {checked && <Tooltip />}
    </span>
  );
};

export default AutoSignInCheckbox;
