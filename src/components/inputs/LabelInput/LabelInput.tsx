import { useState } from "react";
import "./LabelInput.scss";

interface Props {
  onType: Function;
  value: string;
  title: string;
  type?: string;
}

function Button(props: Props) {
  const Class = `labelInput`;
  return (
    <div className={Class}>
      <input
        onChange={(e) => {
          props.onType(e.target.value);
        }}
        value={props.value}
        type={`${props.type ? props.type : "text"}`}
        required
      />
      <span className="bar"></span>
      <label>{props.title}</label>
    </div>
  );
}

export default Button;

//blue, red, green, yellow, lime, grey
