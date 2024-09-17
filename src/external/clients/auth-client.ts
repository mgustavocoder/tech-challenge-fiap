import axios from 'axios'
import { USER_INFO_ENDPOINT } from '../../common/config/constants'
import { Cliente } from '../../core/entities/cliente';

export default class AuthClient {
    static async getUserInfo(accessToken: string | undefined): Promise<Cliente | undefined> {
        if(!accessToken) return undefined
        const response = await axios.get('https://pyy8x7fi75.execute-api.us-east-1.amazonaws.com/Prod/user-info/', 
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }
        )
        const data = response.data
        return new Cliente(data.name, data.cpf, data.email, '')
    }
}