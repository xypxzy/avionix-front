import {client} from "@/src/services/axios";
import {IFaq, IWhyUs} from "@/src/shared/types/discovery";

const DISCOVERY_URL = 'discovery/api'

class DiscoveryService {
	getWhyUsList(lan: string) {
		return client.get<IWhyUs[]>(`${DISCOVERY_URL}/whyUs?lan=${lan}`)
	}

	getFaqList(lan: string) {
		return client.get<IFaq[]>(`${DISCOVERY_URL}/faq?lan=${lan}`)
	}

	setFaqList(userMessage: any) {
		return client.post<IFaq[]>(`${DISCOVERY_URL}/contact`, userMessage)
	}
}

export default new DiscoveryService()
