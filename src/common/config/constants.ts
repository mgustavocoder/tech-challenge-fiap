//Identidade e Acesso API
export const USER_INFO_ENDPOINT = 'https://pyy8x7fi75.execute-api.us-east-1.amazonaws.com/Prod/user-info/'
//Database
export const DB_PORT: number = 3306
export const DB_NAME: string = 'lanchonete'
export const DB_USER: string = process.env.DB_USER || ''
export const DB_PASSWORD: string = process.env.DB_PASSWORD || ''
export const DB_HOST: string = process.env.DB_HOST || ''