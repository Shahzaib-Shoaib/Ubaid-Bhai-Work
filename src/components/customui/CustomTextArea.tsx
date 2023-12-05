import React, { FC } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  control: any;
  label: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  placeholder?: string;
}

const CustomTextArea: FC<Props> = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    placeholder = "",
    ...remaining
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {/* <FormLabel className={cn("", labelClassName)}>{label}</FormLabel> */}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className={cn("text-white sm:px-1 sm:py-0  sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-transparent placeholder:text-white sm:min-h-[80px] sm:rounded-xl min-h-[150px] rounded-3xl", className)}
              {...remaining}
              {...field}
            />
          </FormControl>
          {/* <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomTextArea
