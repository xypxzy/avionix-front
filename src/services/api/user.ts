import {client} from "@/src/services/axios";
import {IUser} from "@/src/shared/types/user";

const USER_URL = '/client/api/'

class UserService {
    async getUser(accessToken: string) {
        return client.get<IUser>(`${USER_URL}/customer}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(res => res.data)
    }
}

export default new UserService()
