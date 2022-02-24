const Sequelize = require('sequelize')
const db = require('../config/db')

module.exports = app => {

    const users = db.define('users', {
        id:             {type: Sequelize.INTEGER(), autoIncrement: true, primaryKey: true},
        name:           {type: Sequelize.STRING(255)},
        user:           {type: Sequelize.STRING(255)},
        password:       {type: Sequelize.STRING(255)},
        token:          {type: Sequelize.STRING(255)},
        isActive:       {type: Sequelize.DataTypes.BOOLEAN, defaultValue: true},
    }, {freezeTableName: true})

    // const date = new Date()
    // console.log(date)

    users.sync()

    module.exports = {users}
}