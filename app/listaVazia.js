export default function listaVazia() {
    const titulosDados = ['Nome','Tipo','Visibilidade','Email','Repositórios Públicos','Seguidores','Seguindo'];
    const listaDados = document.querySelector('.lista-dados');

    listaDados.innerHTML = "";
    
    titulosDados.forEach((titulo) => {
        const itemListaDados = document.createElement('li');
        const paragrafoTxt = document.createElement('p');
        paragrafoTxt.innerText = `${titulo}:`;
        itemListaDados.appendChild(paragrafoTxt);
        listaDados.appendChild(itemListaDados);
    });
};
