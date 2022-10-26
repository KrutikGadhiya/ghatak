import React from "react";
import { TagPropTypes } from "./TagPropTypes";
import "../../colors.css";
import "../../globals.css";
import "./Tag.css";

const Tag = ({
  className,
  children,
  rounded,
  size,
  translucentBg,
  type,
  ...props
}: TagPropTypes) => {
  return (
    <div
      className={`tag ${type ? type : "primary"} ${size ? size : "md"} ${
        rounded ? rounded : "rounded-md"
      } ${className ? className : ""} ${translucentBg ? "translucentBg" : ""}`}
      {...props}
    >
      <span>{children}</span>
    </div>
  );
};

export default Tag;
