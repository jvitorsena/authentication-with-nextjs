module.exports = app => {
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    app.post('/save', app.api.users.save)
    app.get('/allusers', app.api.users.getAll)
}