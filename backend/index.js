const app = require('express')()
const consign = require('consign')
const express = require('express')
const cors = require('cors')

app.use(express.json())

app.use((req, res, next) => { // middleware
    res.header("Access-Control-Allow-Origin", "*") // qualquer aplicação pode fazer requisição
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER Content-Type, Authorization");
    app.use(cors())
    next();
})

consign()
    .include('./config/passport.js')
    .then('./models')
    .then('./api/auth.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)


    // console.log(date.toLocaleString('pt-br', {timezone: 'Brazil/brt'}));

app.listen(5000, () => {
    console.log('Backend executando na porta 5000...')
})