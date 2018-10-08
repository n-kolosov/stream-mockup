'use strict'
const config = require('./config')

const mssqlconfig = {
  client: 'mssql',
  connection: `mssql://${config.mssqlUser}:${config.mssqlPassword}@${config.mssqlHost}/${config.mssqlDatabase}`
}

module.exports = require('knex')(mssqlconfig)
