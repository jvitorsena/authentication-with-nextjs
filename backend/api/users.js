const db = require('../models/users')
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const getAll = async(req,res) => {
        await db.users.findAll().then((tarefas) => {return res.status(200).json(tarefas)})
            .catch(() => {return res.status(400).json({erro: true})})
    }
    
    const save = async (req, res) => {
        const users = { ...req.body }
        console.log(req.body)

        if (req.params.id) users.id = req.params.id
        // console.log(tarefas.tipoId)

        users.password = encryptPassword(users.password)

        try {
            // existsOrError(tarefas.descricao, 'Descrição não informado')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (users.id) {
            await db.tarefas.update({
                descricao: tarefas.descricao,
                tiposId: tarefas.tipoId
            }, {
                where: {
                    id: req.params.id
                }
            }).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: `Tarefa ${tarefas.descricao} alterado`
                })
            }).catch(() => { return res.status(400).json({ erro: true }) })
        } else {
            await db.users.create({
                name: users.name,
                user: users.user,
                password: users.password
            }).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: `Usuario ${users.name} criado`
                })
            }).catch(() => { return res.status(400) })
        }
    }

    return { save, getAll }
}