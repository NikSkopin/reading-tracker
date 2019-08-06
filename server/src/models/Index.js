const fs = require('fs') //nodejs dealing with  file system
const path = require('path') //dealing with absolute/relative paths
const Sequelize = require('sequelize') //create a sequelize model and connect to DB
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs.readdirSync(__dirname)
  .filter(file => file !== 'Index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
