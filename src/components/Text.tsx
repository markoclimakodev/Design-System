import { clsx } from "clsx";
export interface TextProps {
  size?: "xs" | "sm" | "md";
  children : string
}

export function Text({ size = "xs", children }: TextProps) {
  return (
    <span
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md"
      })}
    >
      {children}
    </span>
  );
}
