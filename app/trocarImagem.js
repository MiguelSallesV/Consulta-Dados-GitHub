export default function trocarImagem(dados) {
    const imagem = document.querySelector('.imagem-padrao');
    imagem.src = dados.avatar_url;    
    imagem.classList.add('imagem-github');
};