import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  size?: "xs" | "sm" | "md";
  color?: "gray-100" | "gray-400";
  children: ReactNode;
  asChild?: boolean;
  className?:string
}

export function Text({
  size = "md",
  children,
  asChild,
  color = "gray-100",className
}: TextProps) {
  const Component = asChild ? Slot : "p";

  return (     
    <Component
      className={clsx(" font-sans", { 
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-gray-100": color === "gray-100",
        "text-gray-400": color === "gray-400"
      },className)}
  
    >
      {children}
    </Component>
  );
}
