module.exports = app => {
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .get(app.api.users.getAll)
        .post(app.api.users.save)

    app.route('/users/token')
        .post(app.api.users.getForToken)

    app.route('/users/:id')
        .delete(app.api.users.remove)
        .put(app.api.users.save)
}