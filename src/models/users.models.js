const {DataTypes} = require('sequelize')
const db = require('../utils/database.js')

const Users =  db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }, 
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.STRING,
    defaultValue: 'Unknown'
  }
}, {
  timestamps: false
})

module.exports = Users





