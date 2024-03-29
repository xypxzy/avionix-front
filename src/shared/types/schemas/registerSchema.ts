import {z} from 'zod'
import {isValidPhoneNumber} from "react-phone-number-input";

export const registerFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  gender: z.enum(['MALE', 'FEMALE']),
  dateOfBirth: z.date().refine(date => date < new Date(), {
    message: "Date of birth must be in the past",
  }),
  nationality: z.string().min(2).max(50),
  passportId: z.string().min(2).max(50).regex(/^[A-Za-z0-9]*$/, "Passport ID must contain only digits and letters"),
  passportExpiryDate: z.date().refine(date => date > new Date(), {
    message: "Passport expiry date must be in the future",
  }),
  email: z.string().email().max(50),
  phone:  z
  .string()
  .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  password: z.string().min(5).max(50),
  confirmPassword: z.string(),
	agreedToTermsOfUse: z.boolean().refine(b => b, {
    message: "You must agree to the terms of use",
  })
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match"
    });
  }
});