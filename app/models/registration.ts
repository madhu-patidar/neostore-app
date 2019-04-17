import client from '../configFiles/database'

const register_table=client.query('Create table user_registration (email_id text unique,password text,phone_no number,gender text')

export default register_table;