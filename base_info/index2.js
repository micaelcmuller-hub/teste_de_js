const titulo = document.querySelector("#titulo-aviso");
const descricao = document.querySelector("#descricao-aviso");
const botao = document.querySelector("#botao-aviso");

const aviso = {
    titulo: "oficina do free fire",
    descricao: "venha jogar com nosco, e se divertir com a gente"
};

function mostrarAviso() {
    titulo.textContent = aviso.titulo;
    descricao.textContent = aviso.descricao;
}
botao.addEventListener("click", mostrarAviso);

