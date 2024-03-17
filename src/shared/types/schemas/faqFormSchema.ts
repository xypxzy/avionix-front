import {z} from "zod";

export const formSchema = z.object({
    name: z.string(),
    email: z.string().min(5, 'Min length 5 symbols').email('Invalid email'),
    message: z.string().min(10, 'You must write min 10 symbols')
})