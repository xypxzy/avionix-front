import { client } from '@/src/services/axios'
import { IFaq, IWhyUs } from '@/src/shared/types/discovery'
import { formSchema } from '@/src/shared/types/schemas/faqFormSchema'
import { z } from 'zod'

const DISCOVERY_URL = 'discovery/api'

class DiscoveryService {
	async getWhyUsList(lan: string) {
		return await client
			.get<IWhyUs[]>(`${DISCOVERY_URL}/whyUs?lan=${lan}`)
			.then(res => res.data)
	}

	async getFaqList(lan: string) {
		return await client
			.get<IFaq[]>(`${DISCOVERY_URL}/faq?lan=${lan}`)
			.then(res => res.data)
	}

	async setFaqList(userMessage: z.infer<typeof formSchema>) {
		return await client.post<IFaq[]>(`${DISCOVERY_URL}/contact`, userMessage)
	}
}

const DiscoveryServiceInstance = new DiscoveryService()

export default DiscoveryServiceInstance
