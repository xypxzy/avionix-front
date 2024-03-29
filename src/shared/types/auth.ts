import {z} from "zod";
import {registerFormSchema} from "./schemas/registerSchema";

export type RegisterInputs = z.infer<typeof registerFormSchema>
export type RegisterFieldName = keyof RegisterInputs
export interface IRegisterStep {
  id: number
  fields?: RegisterFieldName[]
}

