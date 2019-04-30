import dotenv from 'dotenv'

 dotenv.config()
 
 //MongoDB Credential
export const URL:any = process.env.mongoURL

//Server Port
export const PORT:any= process.env.PORT

//PostgreSQL Credentials
export const user:any=process.env.user
export const host:any=process.env.host
export const password:any=process.env.password
export const database:any=process.env.database
export const port:any=process.env.port



