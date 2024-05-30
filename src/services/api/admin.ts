import {
	Account,
	Comment,
	Contact,
} from '@/src/components/shared/Admin/DataTable/data/schema'
import { client } from '@/src/services/axios'
import axios from 'axios'

const ADMIN_URL = '/client/api/management/'

class AdminService {
	// GET INBOX DATA
	async getAccountList(accessToken: string) {
		return await client
			.get<Account[]>(`${ADMIN_URL}accounts`, {
				headers: { Authorization: accessToken },
			})
			.then(res => res.data)
			.catch(error => console.log(error))
	}

	async getCommentList(accessToken: string) {
		return await client
			.get<Comment[]>(`${ADMIN_URL}comment`, {
				headers: { Authorization: accessToken },
			})
			.then(res => res.data)
			.catch(error => console.log(error))
	}

	async getContactList(accessToken: string) {
		return await client
			.get<Contact[]>(`discovery/api/contact`, {
				headers: { Authorization: accessToken },
			})
			.then(res => res.data)
			.catch(error => console.log(error))
	}

	public async postBlockAccount(id: string, accessToken: string) {
		try {
			const response = await client.patch(
				`${ADMIN_URL}lock/${id}`,
				{},
				{
					headers: { Authorization: accessToken },
				}
			)
			return response.data
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}

	public async postUnblockAccount(id: string, accessToken: string) {
		try {
			const response = await client.patch(
				`${ADMIN_URL}unblock/${id}`,
				{},
				{
					headers: { Authorization: accessToken },
				}
			)
			return response.data
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.response?.data.status)
			}
		}
	}
}

const AdminServiceInstance = new AdminService()

export default AdminServiceInstance
