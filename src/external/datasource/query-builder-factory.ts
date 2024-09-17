import knex from 'knex'
import os from 'os'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../../common/config/constants'

const getIPAddress = () => {
  const interfaces = os.networkInterfaces()
  for (const interfaceName in interfaces) {
    const intc = interfaces[interfaceName]
    if (intc) {
      for (const iface of intc) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address
        }
      }
    }
  }
  return null
}

export function queryBuilderFactory () {
  const ip: string | null = getIPAddress()
  console.log(`IP: ${ip}`, DB_HOST)
  const queryBuilder = knex({
    client: 'mysql2',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME
    }
  })
  return queryBuilder
}
