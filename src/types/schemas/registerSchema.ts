import { z } from 'zod'

export const GENDERS = ['MALE', 'FEMALE', 'OTHER'] as const
export const zGENDERS = z.enum(GENDERS)

export const registerFormSchema = z
	.object({
		email: z.string().email(),
		phone: z.string().min(8),
		password: z.string().min(4),
		confirmPassword: z.string().min(4),
		firstName: z.string(),
		lastName: z.string(),
		gender: z.union([
			z.literal('MALE'),
			z.literal('FEMALE'),
			z.literal('OTHER'),
			z.literal(''),
		]),
		dateOfBirth: z.date(),
		nationality: z.string(),
		passportId: z.string(),
		passportExpiryDate: z.date(),
		agreedToTermsOfUse: z.boolean(),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "Password don't much",
		path: ['confirmPassword'],
	})
