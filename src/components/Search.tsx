"use client";

import React, { useState } from "react";
import { Icons } from "../components/Icons";
import CustomDialog from "../components/customui/CustomDialog";
import { searching_data } from "../data/Searching";
import CustomForm from "./customui/CustomForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema } from "@/schemas/searchSchema";
import { z } from "zod";
import CustomInput from "./customui/CustomInput";
import CustomButton from "./customui/CustomButton";
import Link from "next/link";

const Search = () => {
  const [searching, setSearching] = useState("");
  const [searchedData, setSearchedData] = useState({
    id: "00",
    name: "Please type to Search.",
    href: "#",
  });

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      name: "",
    },
  });
  async function onSubmit(values: z.infer<typeof searchSchema>) {
    for (var i = 0; i < searching_data.length; i++) {
      if (values.name === searching_data[i].name) {
        setSearchedData(searching_data[i]);
      }
    }
  }

  return (
    <CustomDialog
      contentClassName="dialog-box max-w-[95%] flex flex-col justify-center items-center !bg-transparent !bg-opacity-30 !border-none !shadow-none"
      trigger={
        <div className="rounded-full p-2 ml-2 border-2 border-white bg-transparent hover:bg-white hover:border-golden group cursor-pointer">
          <Icons.search className="text-white w-4 h-4 group-hover:text-golden " />
        </div>
      }
      content={
        <div className="w-full p-4">
          <CustomForm form={form} onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-5 sm:gap-2 justify-center items-center">
              <CustomInput
                className="h-14 sm:h-10 border-white border-2"
                control={form.control}
                label="Search"
                name="name"
                description="Search"
                placeholder="Search Services"
                fieldclass="!w-[60%] !text-black border-golden"
              />
              <CustomButton type="submit" variant={"light"} className="h-14 sm:h-10">
                Search
              </CustomButton>
            </div>
          </CustomForm>
          <div className="data py-4 text-center">
            {searchedData.name === "Please type to Search." ? (
              <p className="text-white !text-center text-[32px] sm:text-[22px] font-bold">{searchedData.name}</p>
            ) : (
              <Link href={searchedData.href}>
                <p className="text-black underline !text-center text-[32px] sm:text-[22px] font-bold "> {searchedData.name}</p>
              </Link>
            )
            }
          </div>
        </div>
      }
    ></CustomDialog>
  );
};

export default Search;
