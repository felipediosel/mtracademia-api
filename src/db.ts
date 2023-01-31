import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
dotenv.config()

export class Database {
    private _sequelize: Sequelize;

    constructor() {
        this._sequelize = new Sequelize({
            database: process.env.DATABASE_NAME,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT !== undefined ? parseInt(process.env.DATABASE_PORT) : 1433,
            dialect: 'mssql',
            models: [__dirname + '/model'],
            dialectOptions: {
                options: {
                    enableArithAbort: false,
                    cryptoCredentialsDetails: {
                        minVersion: 'TLSv1'
                    },
                    encrypt: false,
                    trustServerCertificate: true
                }
            }
        })
    }

    async connect(): Promise<void> {
        try {
            return await this._sequelize.authenticate()
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
    }

    async close(): Promise<void> {
        try {
            return await this._sequelize.close()
        } catch (error) {
            console.error('Unable to close to the database:', error)
        }
    }

    get sequelize(): Sequelize {
        return this._sequelize
    }
}