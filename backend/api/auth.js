const db = require('../models/users')
const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    /* Método para logar */
    const signin = async (req, res) => {
        console.log(req.body)
        if (!req.body.user) {
            return res.status(400).send('Informe usuário!')
        }

        /* Pesquisa no banco de dados pelo usuario */
        const user = await db.users.findAll({
            where: {
                user: req.body.user
            },
            raw: true,
        }).then(data => { return data[0] })

        console.log(user)
        console.log(req.body)

        
        /* Caso retorno seja diferente de true, retorna mensagem de erro */
        if (!user) return res.status(400).send('Usuário não encontrado!')
        
        const isMath = bcrypt.compareSync(req.body.password, user.password)
        
        if (!isMath) return res.status(401).send('Email ou senha inválidos!')

        /* Variavel now pega horario atual */
        const now = Math.floor(Date.now() / 1000)
        
        /* Variavel para pegar informações do usuario no banco, exp = expiração do token */
        const payload = {
            id: user.id,
            name: user.name,
            user: user.user,
            iat: now,
            // exp: now + (20) // 20 segundos
            exp: now + (60 * 60 * 24 * 3)
        }

        /* Método para salvar token no usuario no banco de dados */
        await db.users.update({
            token: jwt.encode(payload, authSecret)
        }, {
            where: {
                user: req.body.user
            }
        })
        
        /* Retorno json com destruturação da variavel payload junto com token */
        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    /* Validação do token */
    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch (e) {
            // problema com o token
        }

        console.log('deu certo')
        res.send(false)
    }

    return { signin, validateToken }
}