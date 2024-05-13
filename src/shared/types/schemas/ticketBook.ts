import { z } from 'zod'

export const ticketBookSchema = z.object({
	flightId: z.string().min(2).max(50),
	seat: z.string().min(2).max(50),
	paymentLinkId: z.string().min(2).max(50),
	checkedBaggageIncluded: z.boolean(),
})

export type ITicketBook = z.infer<typeof ticketBookSchema>
export type TicketBookFieldName = keyof ITicketBook
export interface ITicketBookStep {
	id: number
	fields?: TicketBookFieldName[]
}

export const TicketStep: ITicketBookStep[] = [
	{
		id: 1,
		fields: [],
	},
	{
		id: 2,
		fields: ['checkedBaggageIncluded'],
	},
	{
		id: 3,
		fields: ['seat'],
	},
	{
		id: 4,
		fields: [],
	},
]
