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

declare type TagPropTypes = {
    className?: string;
    children: React.ReactNode | string;
    opacity?: number;
    rounded?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
    size?: "sm" | "md" | "lg";
    translucentBg?: boolean;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    [x: string]: any;
};

declare const Tag: ({ className, children, rounded, size, translucentBg, type, ...props }: TagPropTypes) => JSX.Element;

export { Button, Tag };
