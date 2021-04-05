const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        const Atendimento = req.body

        Atendimento.adiciona(Atendimento, res)


    })
}