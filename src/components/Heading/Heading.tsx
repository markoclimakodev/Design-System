import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface HeadingProps {
  size?: "lg" | "xl" | "2xl";
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = "lg", children, asChild }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "lg",
        "text-xl": size === "xl",
        "text-2xl": size === "2xl"
      })}
    >
      {children}
    </Component>
  );
}
