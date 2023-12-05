"use client";
import { contactSchema } from "@/schemas/contactSchema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomForm from "./customui/CustomForm";
import CustomInput from "./customui/CustomInput";
import CustomCombobox from "./customui/CustomCombobox";
import CustomSelect from "./customui/CustomSelect";
import CustomTextArea from "./customui/CustomTextArea";
import CustomButton from "./customui/CustomButton";
import { countries } from "@/data/countries";

const Contactus: React.FC = () => {
  const [message, setMessage ] = useState<string>("")
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      companyname: "",
      job: "",
      email: "",
      city: "",
      message: "",
    },
  });

  const services = [
    { id: "1", name: "Finance & Accounting", value: "Finance & Accounting" },
    {
      id: "2",
      name: "Corporate Finance Advisory",
      value: "Corporate Finance Advisory",
    },
    { id: "3", name: "Tax", value: "Tax" },
    {
      id: "4",
      name: "Investment & Family Office Advisory",
      value: "Investment & Family Office Advisory",
    },
    {
      id: "5",
      name: "Risk & Regulatory Advisory",
      value: "Risk & Regulatory Advisory",
    },
    { id: "6", name: "Management Consulting", value: "Management Consulting" },
  ];


  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await response.json()
    if(data.message === "Sent"){
      setMessage("Sent")
    }else {
      setMessage("Failed")
    }
  }
  return (
    <div className="w-full">
      <CustomForm form={form} onSubmit={form.handleSubmit(onSubmit)}>
        
        <div className="grid grid-cols-2 gap-2">
        <CustomInput
          control={form.control}
          label="Name"
          name="name"
          description="Please Enter your Name"
          placeholder="Your Name"
          fieldclass="w-full"
        />
          <CustomInput
            control={form.control}
            label="Company Name"
            name="companyname"
            description="Please Enter your Company Name"
            placeholder="Company Name"
            fieldclass="w-full"
          />
          
        </div>
        <div className="grid grid-cols-2  gap-2">
        <CustomInput
            control={form.control}
            label="Job Title"
            name="job"
            description="Please Enter your Job Title"
            placeholder="Job Title"
            fieldclass="w-full"
          />
          <CustomInput
            control={form.control}
            label="Email"
            name="email"
            type="email"
            description="Please Enter your Email"
            placeholder="Email Address"
            fieldclass="w-full"
          />
          
        </div>
        <div className="grid grid-cols-2  gap-2">
        <CustomCombobox
            form={form}
            control={form.control}
            name="country"
            placeHolder="Select Country"
            options={countries}
            optionsEmptyPlaceholder="No Countries Found."
          />
          <CustomInput
            control={form.control}
            label="City"
            name="city"
            description="Please Enter your City Name"
            placeholder="City Name"
            fieldclass="w-full"
          />
          
        </div>
        <CustomSelect
            control={form.control}
            name="service"
            placeholder="Select Service"
            options={services}
            label="Service"
            description="Please Select Service"
            className="w-full"
          />
        <CustomTextArea
          control={form.control}
          label="Message"
          name="message"
          placeholder="Message"
        />
        <CustomButton type="submit" variant={"light"}>
          Send
        </CustomButton>
      </CustomForm>
        {
          message === "Sent" && 
          <div className="bg-white p-4 my-2">
            <p className="text-green-800 mb-0">Message sent Successfully.</p>
            </div>
        }
        {
          message === "Failed" && 
          <div className="bg-white p-4 my-2">
          <p className="text-red-800 mb-0">Message could not be sent. Please try again later.</p>
          </div>
        }
    </div>
  );
};

export default Contactus;
