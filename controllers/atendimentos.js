const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);

    })

    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    });

    app.post('/atendimentos', (req, res) => {
        const Atendimento = req.body

        Atendimento.adiciona(Atendimento, res)


    })
}