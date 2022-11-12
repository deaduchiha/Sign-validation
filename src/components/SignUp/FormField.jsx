import React from "react";

import styles from "../../styles/Sign.module.css";

const FormField = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        className={props.style}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.change}
        onFocus={props.focus}
      />
      {props.errorss}
    </>
  );
};

export default FormField;
