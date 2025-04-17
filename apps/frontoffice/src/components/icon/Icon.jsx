import letterPath from "./images/shape=letter.svg";
import lockPath from "./images/shape=lock.svg";
import eyePath from "./images/shape=eye.svg";
import eyeOffPath from "./images/shape=eye-off.svg";
import Image from "next/image";

const Icon = ({ type, alt = "", ...restProps }) => {
  let src = "";

  switch (type) {
    case "letter":
      src = letterPath;
      break;
    case "lock":
      src = lockPath;
      break;
    case "eye":
      src = eyePath;
      break;
    case "eye-off":
      src = eyeOffPath;
      break;
    default:
      src = letterPath; // Default icon
      break;
  }
  return <Image src={src} alt={alt} {...restProps} />;
};

export default Icon;
