import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  placeholder?: string;
  fieldclass?: string;
}

const CustomInput = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    placeholder = "",
    fieldclass = "",
    ...remaining
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("",fieldclass)}>
          {/* <FormLabel className={cn("", labelClassName)}>{label}</FormLabel> */}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={cn(
                "bg-transparent sm:px-1 2xl:py-6 sm:py-0 sm:h-fit placeholder:text-white sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-white rounded-full",
                className
              )}
              {...remaining}
            />
          </FormControl>
          {/* <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
