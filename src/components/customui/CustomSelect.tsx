import React, { FC } from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Props = {
  control:any,
  label?:string,
  name:string,
  className?: string;
  labelclassName?: string;
  description?:string,
  descriptionClassName?:string,
  placeholder:string,
  options: { id: string,name: string,value: string }[];
}

const CustomSelect = (props:Props) => {  
  const {control,label='',placeholder='',name,options,description='',labelclassName='',className='',descriptionClassName=""} =props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("",className)}>
          {/* <FormLabel className={cn("",labelclassName)}>
            {label}
          </FormLabel> */}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='bg-transparent 2xl:py-6  sm:py-0 sm:px-1 sm:h-fit placeholder:text-white sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-white rounded-full'>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='text-white bg-black'>
                  {options.map((option) => {
                  return (
                    <SelectItem value={option.value} key={option.id} className='focus:bg-golden focus:text-white cursor-pointer sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]'>
                      {option.name}
                    </SelectItem>
                  );
                })}
                </SelectContent>
              </Select>
          {/* <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
