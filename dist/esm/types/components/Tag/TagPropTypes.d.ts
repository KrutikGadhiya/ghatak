/// <reference types="react" />
export declare type TagPropTypes = {
    className?: string;
    children: React.ReactNode | string;
    opacity?: number;
    rounded?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
    size?: "sm" | "md" | "lg";
    translucentBg?: boolean;
    type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
    [x: string]: any;
};
