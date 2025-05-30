export default function listaVazia() {
    const titulosDados = ['Nome','Tipo','Visibilidade','Local','Repositórios Públicos','Seguidores','Seguindo'];
    const listaDados = document.querySelector('.lista-dados');

    listaDados.innerHTML = "";
    
    titulosDados.forEach((titulo) => {
        const itemListaDados = document.createElement('li');
        const paragrafoTxt = document.createElement('p');
        const imagem = document.querySelector('.imagem-padrao');
        
        imagem.src = '/assets/usericon.png';
        paragrafoTxt.innerText = `${titulo}:`;
        itemListaDados.appendChild(paragrafoTxt);
        listaDados.appendChild(itemListaDados);

    });
};
