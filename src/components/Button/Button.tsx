import React, {type FC } from "react"
import "./Button.css"
import "../../globals.css"
import "../../colors.css";

import { ButtonPropTypes } from "./ButtonPropTypes"

const Button = ({
  className,
  children,
  disabled,
  fullWidth,
	htmlType,
  loading,
  prefix,
  rounded,
  size,
  type,
  suffix,
  ...props
}: ButtonPropTypes) => {
  return (
    <button
		type={htmlType || "button"}
      className={`button ${className || ""} ${size ? size : "md"} ${
        type ? type : "primary"
      } ${rounded ? rounded : "rounded-md"} ${fullWidth ? "fullWidth" : ""} ${
        loading ? "loading" : ""
      }`}
      disabled={disabled || false}
      // onClick={props.onClick}
      {...props}
    >
      {/* {props.loading && <div className={styles.spinningLoader}></div>} */}
      <div className="wrapper">
        <div className="spinningLoader"></div>
        <span className="content">
          {prefix && <span>{prefix}</span>}
          <span>{children}</span>
          {suffix && <span>{suffix}</span>}
        </span>
        {/* {JSON.stringify(styles)} */}
      </div>
    </button>
  );
};

export default Button;
