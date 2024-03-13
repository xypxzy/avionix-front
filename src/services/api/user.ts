import {client} from "@/src/services/axios";
import {IFaq, IWhyUs} from "@/src/shared/types/discovery";

const USER_URL = '/client/api/'

class UserService {
    async getUser(username: string) {
        return client.get<IWhyUs>(`${USER_URL}/${username}`);
    }
}

export default new UserService()
