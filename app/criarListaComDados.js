export default function criarListaComDados(dados) {
    const dadosRequisitados = [dados.name, dados.type, dados.user_view_type, dados.location, dados.public_repos, dados.followers, dados.following];
    const titulosDados = ['Nome','Tipo','Visibilidade','Local','Repositórios Públicos','Seguidores','Seguindo'];
    const listaDados = document.querySelector('.lista-dados');

    listaDados.innerHTML = '';
    
    dadosRequisitados.forEach((dado,indice) => {
        const itemListaDados = document.createElement('li');
        const paragrafoTxt = document.createElement('p');
        if (dado === null) {
            paragrafoTxt.innerText = `${titulosDados[indice]}: Nenhum`;    
        } else {
            paragrafoTxt.innerText = `${titulosDados[indice]}: ${dado}`;
        }
        itemListaDados.appendChild(paragrafoTxt);
        listaDados.appendChild(itemListaDados);
    });
};