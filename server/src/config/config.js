module.exports = {
  port: process.env.PORT || 8081,

  //sequelize related configuration
  db: {
    database: process.env.DB_NAME || 'readingtracker',
    user: process.env.DB_USER || 'readingtracker',
    password: process.env.DB_PASS,
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './readingtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
