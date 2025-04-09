import React from "react";
import styles from "./Loader.module.scss";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <RotatingLines
          visible={true}
          width="30"
          color="#03639d"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <RotatingLines
          visible={true}
          width="30"
          strokeColor="#03639d"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  );
};

export default Loader;
