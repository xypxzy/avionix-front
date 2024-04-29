import { client } from '@/src/services/axios'

const USER_URL = '/client/api/'

class UserService {
	async getUserInfo(){
		return await client.get(`${USER_URL}/customer`, {headers:{Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBdmlvbml4Iiwic3ViIjoiQUNDRVNTX1RPS0VOIiwidXNlcm5hbWUiOiIyMDA0LjAxMDM1QG1hbmFzLmVkdS5rZyIsImF1dGhvcml0aWVzIjoiUk9MRV9DTElFTlQiLCJpYXQiOjE3MTQ0MDkxNzIsImV4cCI6MTcxNDQxMjc3Mn0.yg0stjP2RIQ0QXR4yy-el-LPuL14BNgiVlqrVhF5Q4A'}}).then(res=>res.data).catch(error=>console.log(error))
	}
}

const userService = new UserService()

export default userService
