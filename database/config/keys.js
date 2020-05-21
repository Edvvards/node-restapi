require('dotenv').config()

export const mongoURI = `mongodb+srv://rest-api:${process.env.DB_PASS}@cluster0-bc0uk.mongodb.net/test?retryWrites=true&w=majority`;