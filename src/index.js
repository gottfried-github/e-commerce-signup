import {MongoClient} from 'mongodb'

function main() {
    /* ensure environment variables */
    // database connection data
    if (!process.env.APP_DB_NAME || !process.env.APP_DB_USER || !process.env.APP_DB_PASS || !process.env.NET_NAME) throw new Error('all of the database connection parameters environment variables must be set')
    
    /* connect to database */
    const client = new MongoClient(`mongodb://${process.env.APP_DB_USER}:${process.env.APP_DB_PASS}@${process.env.NET_NAME}/${process.env.APP_DB_NAME}`)
    client.connect()
}

export default main