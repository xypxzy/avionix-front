import { client } from '@/src/services/axios'
import { IFaq, IWhyUs } from '@/src/shared/types/discovery'

const DISCOVERY_URL = 'discovery/api/'

class DiscoveryService {
	getWhyUsList() {
		return client.get<IWhyUs[]>(`${DISCOVERY_URL}/whyUs`)
	}

	getFaqList() {
		return client.get<IFaq[]>(`${DISCOVERY_URL}/faq`)
	}
}

const DiscoveryServiceInstance = new DiscoveryService()

export default DiscoveryServiceInstance
