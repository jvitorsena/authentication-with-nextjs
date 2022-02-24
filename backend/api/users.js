const db = require('../models/users')
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const getAll = async (req, res) => {
        await db.users.findAll({
            attributes: {
                include: [
                    [
                        Sequelize.fn("DATE_FORMAT", Sequelize.col("createdAt"),"%d-%m-%Y %H:%i:%s"), "createdAt"
                    ],
                    [
                        Sequelize.fn("DATE_FORMAT", Sequelize.col("updatedAt"),"%d-%m-%Y %H:%i:%s"), "updatedAt"
                    ]
                ]
            }
        }).then((tarefas) => { return res.status(200).json(tarefas) })
            .catch(() => { return res.status(400).json({ erro: true }) })
    }

    const getForToken = async (req, res) => {
        await db.users.findAll({
            where: {
                token: req.body.token
            },
            attributes: { exclude: ['password','token'] }
        }).then((user) => {return res.status(200).json(user)})
    }

    const save = async (req, res) => {
        const users = { ...req.body }
        console.log(req.body)

        if (req.params.id) users.id = req.params.id
        // console.log(tarefas.tipoId)

        const existsUser = await db.users.findAll({
            where: {
                user: users.user
            }
        })

        try {
            existsOrError(users.name, 'Nome não informado')
            existsOrError(users.user, 'Usuario não informado')
            existsOrError(users.password, 'Senha não informada')
            if(!users.id) notExistsOrError(existsUser, 'Usuario já existe')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        users.password = encryptPassword(users.password)

        if (users.id) {
            await db.users.update({
                name: users.name,
                user: users.user,
                password: users.password
            }, {
                where: {
                    id: req.params.id
                }
            }).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: `Usuario ${users.name} alterado`
                })
            }).catch(() => { return res.status(400).json({ erro: true }) })

            var date = new Date().toLocaleDateString('pt-BR', {timeZone: 'UTC'})

        } else {
            await db.users.create({
                name: users.name,
                user: users.user,
                password: users.password,
            }).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: `Usuario ${users.name} criado`
                })
            }).catch(() => { return res.status(400) })
        }
    }

    const remove = async (req, res) => {
        try {
            await db.users.destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => {
                return res.status(200).json({
                    erro: false,
                    mensagem: `Usuario id ${req.params.id} deletado`
                })
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: `Usuario id ${req.params.id} não encontrado`
                })
            })
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    return { save, getAll, remove, getForToken }
}