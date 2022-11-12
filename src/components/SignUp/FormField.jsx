import React from "react";

const FormField = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.change}
        onFocus={props.focus}
      />
      {props.errorss}
    </div>
  );
};

export default FormField;
