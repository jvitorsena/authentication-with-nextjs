const Sequelize = require('sequelize')
const { passwdDb } = require('../.env')

const sequelize = new Sequelize('users', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions:{useUTC:false},timezone:"-03:00"
})

sequelize.authenticate()
    .then(function () {
        console.log("Conexão com banco de dados com sucesso")
    }).catch(function () {
        console.log('Conexao com banco de dados falhou')
    })

module.exports = sequelize