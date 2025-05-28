import criarListaComDados from "./app/criarListaComDados.js";
import listaVazia from "./app/listaVazia.js";
import trocarImagem from "./app/trocarImagem.js";
const inputUser = document.querySelector('.input-user');
const btnGerar = document.querySelector('.btn-gerar');
const btnLimpar = document.querySelector('.btn-limpar');


listaVazia();

btnGerar.addEventListener('click', async () => {
    const user = inputUser.value;
    try {
        if (user === '') {
            throw new Error('Você deve digitar um nome de usuário!');
        };

        const res = await fetch(`https://api.github.com/users/${user}`);
        const dados = await res.json();

        if (dados.name === null || dados.name === undefined) {
            throw new Error("Insira um user válido!");
        };

        criarListaComDados(dados);
        trocarImagem(dados);
        inputUser.value = '';
        
    } catch (error) {
        alert(error.message);
    }
})

btnLimpar.addEventListener('click', () => { 
    listaVazia();
})


