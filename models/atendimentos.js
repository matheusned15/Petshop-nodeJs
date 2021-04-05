const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data).format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = { ...atendimento, dataCriacaon, data }
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}