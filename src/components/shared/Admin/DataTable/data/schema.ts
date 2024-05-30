import { z } from 'zod'

export const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	status: z.string(),
	label: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const commentSchema = z.object({
	id: z.string(),
	author: z.string(),
	description: z.string(),
	grade: z.string(),
	createdAt: z.string(),
})

export type Comment = z.infer<typeof commentSchema>

export const accountsSchema = z.object({
	id: z.string(),
	email: z.string(),
	roles: z.string(),
	phone: z.string(),
	enabled: z.boolean(),
	nonLocked: z.boolean(),
})

export type Account = z.infer<typeof accountsSchema>

export const contactSchema = z.object({
	id: z.string(),
	email: z.string(),
	name: z.string(),
	message: z.string(),
	createdAt: z.string(),
})

export type Contact = z.infer<typeof contactSchema>
