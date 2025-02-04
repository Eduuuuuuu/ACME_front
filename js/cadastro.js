'use strict'

import { getFilmes, postFilme, putFilme } from "./filmes.js"

const titulo = document.getElementById('titulo')

const sinopse = document.getElementById('sinopse')

const duracao = document.getElementById('duracao')

const dataLancamento = document.getElementById('lancamento')

const dataRelancamento = document.getElementById('relancamento')

const valor = document.getElementById('valor')

const classifi = document.getElementById('classificacao')

const cadastrar = document.getElementById('cadastrar')

const poster = document.getElementById('poster')

cadastrar.addEventListener('click', () => {

    const tituloInput = titulo.value

    const sinopseInput = sinopse.value

    const duracaoInput = duracao.value

    const dataLancamentoInput = dataLancamento.value

    const dataRelancamentoInput = dataRelancamento.value

    const valorInput = valor.value

    const classifiInput = classifi.value

    const capaInput = poster.src
    
    const insert = {
        nome: tituloInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: dataLancamentoInput,
        data_relancamento: dataRelancamentoInput,
        valor_unitario: valorInput,
        foto_capa: capaInput,
        id_classificacao: classifiInput
    }

    postFilme(insert)
    window.location.href = '../telas/cms.html'
})

link.addEventListener('keyup', () => {
    poster.src = link.value 
})