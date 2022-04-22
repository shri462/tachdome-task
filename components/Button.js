import React from "react";
import styles from "./Button.module.css";

function Button({ value }) {
  return <button className={styles.button}>{value}</button>;
}

export default Button;
