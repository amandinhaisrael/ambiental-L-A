const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você protege o meio ambiente?",
        alternativas: [
            {
           texto: "sim",
           afirmacao: "Sempre é bom proteger o meio ambiente, pois é por ele que vivemos"
            },
            {
                texto: "Não",
                afirmacao: "Ao não proteger o meio ambiente você esta prejudicando a si mesmo"
                 },
        
        ]
    },
    {
        enunciado: "você sabe como proteger o meio ambiente",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
                 },
                 {
                     texto: "Não",
                     afirmacao: "afirmação"
                      },
        ]
    },
    {
        enunciado: "você sabe qual é a proposta da ONU que protege o meio ambiente?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
                 },
                 {
                     texto: "Não",
                     afirmacao: "afirmação"
                      },
        ]
    },
    {
        enunciado: "você sabe como a ONU trabalha dentro dessas questõs",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
                 },
                 {
                     texto: "Não",
                     afirmacao: "afirmação"
                      },
        ]
    },
    {
        enunciado: "Você sabe como preservar as árvores na floresta?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
                 },
                 {
                     texto: "Não",
                     afirmacao: "afirmação"
                      },
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta () {
if (atual>=perguntas.length){
    mostraResultado();
    return;
}
    perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();

}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa)) 
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "";
    textoResultado.textContent="";
    caixaAlternativas.textContent = "";
}

mostraPergunta();