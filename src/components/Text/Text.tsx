import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "xs" | "sm" | "md";
  color?: "gray-100" | "gray-400";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({
  size = "md",
  children,
  asChild,
  color = "gray-100"
}: TextProps) {
  const Component = asChild ? Slot : "a";

  return (     
    <Component
      className={clsx(" font-sans", { 
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-gray-100": color === "gray-100",
        "text-gray-400": color === "gray-400"
      })}
    
    >
      {children}
    </Component>
  );
}
