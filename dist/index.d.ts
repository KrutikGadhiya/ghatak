/// <reference types="react" />
interface ButtonPropTypes {
    className?: string;
    children: React.ReactElement | string;
    disabled?: boolean;
    fullWidth?: boolean;
    htmlType?: "submit" | "button" | "reset";
    loading?: boolean;
    prefix?: React.ReactElement | string | undefined;
    rounded?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
    size?: "sm" | "md" | "lg";
    suffix?: React.ReactElement | string | undefined;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    [x: string]: any;
}

declare const Button: ({ className, children, disabled, fullWidth, htmlType, loading, prefix, rounded, size, type, suffix, ...props }: ButtonPropTypes) => JSX.Element;

export { Button };
