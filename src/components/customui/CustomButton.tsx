"use client";
import { VariantProps, cva } from "class-variance-authority";
import React, { ReactNode, forwardRef } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../Icons";

const customButtonVariants = cva("transition-all duration-500 text-[8px] py-[5px] px-[8px] md:text-[12px] md:py-[12px] md:px-[25px] lg:text-[16px] lg:py-[12px] lg:px-[25px] xl:text-[16px] xl:py-[12px] xl:px-[40px] 2xl:text-[18px] 2xl:py-[12px] 2xl:px-[40px]", {
  variants: {
    variant: {
      light:
        "bg-white border border-white text-golden hover:bg-transparent hover:text-white leading-none",
      dark: "bg-white border border-black text-black  hover:bg-transparent hover:text-golden hover:border-golden leading-none",
      goldish:
        "bg-transparent border border-black text-black  hover:bg-golden hover:text-white hover:border-golden leading-none",
      golden:
        "bg-golden border border-golden hover:bg-transparent hover:text-golden leading-none",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
      none: "rounded-none",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    variant: "golden",
    rounded: "full",
    width: "fit",
  },
});

interface Props extends VariantProps<typeof customButtonVariants> {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  children: ReactNode;
}

const CustomButton = forwardRef((props: Props, forwardRef) => {
  const {
    children,
    variant,
    rounded,
    width,
    className = "",
    isLoading = false,
    loadingText = "",
    onClick = () => undefined,
    ...remaining
  } = props;
  return (
    <Button
      className={
        isLoading
          ? cn(
              "custom-button h-auto transition duration-150 ease-in-out pointer-events-none ",
              customButtonVariants({ variant, rounded, width, className })
            )
          : cn(
              "custom-button h-auto transition duration-150 ease-in-out pointer-events-auto",
              customButtonVariants({ variant, rounded, width, className })
            )
      }
      onClick={onClick}
      {...remaining}
    >
      {isLoading ? (
        <>
          <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
          {loadingText ? loadingText : children}
        </>
      ) : (
        children
      )}
    </Button>
  );
});

export default CustomButton;
