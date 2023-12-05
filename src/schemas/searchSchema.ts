import {z} from "zod"

export const searchSchema = z.object({
    //-------------Input-------------
    name: z
      .string()
      .min(3, { message: "Name should atleast be 3 Characters" })
      .max(30, { message: "Name can only be maximum of 30 Characters" }),
})