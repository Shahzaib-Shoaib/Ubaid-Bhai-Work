import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { Button } from "@/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/ui/command";

type Props = {
  control: any;
  label?: string;
  labelClassName?: string;
  name: string;
  className?: string;
  description?: string;
  descriptionClassName?: string;
  messageClassName?: string;
  popoverTriggerClassName?: string;
  popoverContentClassName?: string;
  optionsClassName?: string;
  optionsInputClassName?: string;
  optionsPlaceholder?: string;
  optionsEmptyPlaceholder: string;
  optionsEmptyClassName?: string;
  optionsGroupClassName?: string;
  form: any,
  placeHolder: string;
  options: { id: string,name: string,value: string }[],
};

const CustomCombobox = (props: Props) => {
  const {
    control,
    label,
    name = "",
    className = "",
    labelClassName = "",
    description = "",
    descriptionClassName = "",
    messageClassName = "",
    popoverTriggerClassName = "",
    popoverContentClassName = "",
    optionsClassName = "",
    options,
    placeHolder = "",
    optionsPlaceholder = "",
    optionsInputClassName = "",
    optionsEmptyPlaceholder = "",
    optionsEmptyClassName = "",
    optionsGroupClassName = "",
    form
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col w-full", className)}>
          <FormLabel className={cn("", labelClassName)}>{label}</FormLabel>
          <Popover >
            <PopoverTrigger
              asChild
              className={cn("", popoverTriggerClassName)}
            >
              <FormControl>
                <Button variant={"outline"} role="combobox" className={cn("w-full sm:px-1 sm:py-0 sm:h-fit justify-between bg-transparent placeholder:text-white sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-white rounded-full hover:bg-transparent hover:text-white", !field.value && "text-white")}>
                    {
                      field.value || placeHolder
                    }
                  <ChevronsUpDown className="ml-2 h-4 w-4 sm:h-2 sm:w-2 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className={cn("p-0 bg-black min-w-[300px]", popoverContentClassName)}>
              <Command className={cn("bg-black text-white w-full", optionsClassName)}>
                <CommandInput placeholder={optionsPlaceholder} className={cn("border-none outline-none focus-visible::outline-none ring-0 focus-visible:ring-0 sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]", optionsInputClassName)} />
                <CommandEmpty className={cn("flex items-center justify-center p-4 sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]", optionsEmptyClassName)}>{optionsEmptyPlaceholder}</CommandEmpty>
                <CommandGroup className={cn("text-white max-h-[200px] overflow-y-auto", optionsGroupClassName)}>
                  {options.map((option) => (
                    <CommandItem
                      value={option.value}
                      key={option.value}
                      className="aria-selected:bg-golden aria-selected:text-white aria-selected:cursor-pointer sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"
                      onSelect={(value) => {
                        form.setValue(name, value);
                        form.clearErrors(name)
                      }}
                    >
                      {option.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          {/* <FormDescription className={cn("", descriptionClassName)}>
            {description}
          </FormDescription> */}
          <FormMessage className={cn("", messageClassName)} />
        </FormItem>
      )}
    />
  );
};

export default CustomCombobox;