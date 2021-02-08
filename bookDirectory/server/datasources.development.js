module.exports ={
    db: {
        host: 'localhost',
        port: 27017,
        url: process.env.DB_URI,
        database: 'LibraryWithLoopBack',
        connector: 'mongodb',
        username: process.env.DB_USER,
        password: process.env.DB_PW
    }
}