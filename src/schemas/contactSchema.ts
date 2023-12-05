import {z} from "zod"

export const contactSchema = z.object({
    //-------------Input-------------
    name: z
      .string()
      .min(3, { message: "Name should atleast be 3 Characters" })
      .max(30, { message: "Name can only be maximum of 30 Characters" }),
    //-------------Input-------------
    companyname: z
      .string()
      .min(3, { message: "Company Name should atleast be 3 Characters" })
      .max(30, { message: "Company Name can only be maximum of 30 Characters" }),
    //-------------Input-------------
    job: z
      .string()
      .min(3, { message: "Job Title should atleast be 3 Characters" })
      .max(30, { message: "Job Title can only be maximum of 30 Characters" }),
    //-------------Input-------------
    email: z.string().email('Invalid email'),
    //-------------Combobox-------------
    country: z.string({
      required_error: "Please select a Country.",
    }),
    //-------------Input-------------
    city: z
      .string()
      .min(3, { message: "City Name should atleast be 3 Characters" })
      .max(30, { message: "City Name can only be maximum of 30 Characters" }),
    //-------------Select-------------
    service: z.string({
        required_error: "Please select a Service.",
      }),
    //-------------TextArea-------------
    message: z
      .string()
      .min(10, {
        message: "Message must be at least 10 characters.",
      })
      .max(160, {
        message: "Message must not be longer than 30 characters.",
      }),
})