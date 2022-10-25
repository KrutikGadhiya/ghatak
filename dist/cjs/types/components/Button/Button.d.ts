/// <reference types="react" />
import "./Button.css";
import "../../colors.css";
import { ButtonPropTypes } from "./ButtonPropTypes";
declare const Button: ({ className, children, disabled, fullWidth, htmlType, loading, prefix, rounded, size, type, suffix, ...props }: ButtonPropTypes) => JSX.Element;
export default Button;
