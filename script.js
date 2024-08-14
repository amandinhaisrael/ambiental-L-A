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
           texto: "sim, pois sei da importancia dele.",
           afirmacao: "Sempre é bom proteger o meio ambiente, pois é por ele que vivemos"
            },
            {
                texto: "Não,pois não me importo.",
                afirmacao: "Ao não proteger o meio ambiente você esta prejudicando a si mesmo"
                 }
        
        ]
    },
    {
        enunciado: "você sabe como proteger o meio ambiente",
        alternativas: [
            {
                texto: "sim, aprendi desde cedo.",
                afirmacao: "se você esta protegendo o meio ambiente provavelmente você esta economizando água, energia, papel"
                 },
                 {
                     texto: "Não, nunca tive exemplo.",
                     afirmacao: "Você sabia que tem como procurar dicas na internet?"
                      }
        ]
    },
    {
        enunciado: "você sabe qual é a proposta da ONU que protege o meio ambiente?",
        alternativas: [
            {
                texto: "sim, e acho muito interessante",
                afirmacao: "Voce sabia que a ONU sempre esta por dentro de todas as questões ambientais? "
                 },
                 {
                     texto: "Não, mas gostaria de saber",
                     afirmacao: "A ONU tem um objetivo que até 2030 pretende reduzir o uso da água, o valor da biodiversiade e a necessidade de garantir sua proteção."
                      }
        ]
    },
    {
        enunciado: "você sabe como a ONU trabalha dentro dessas questõs",
        alternativas: [
            {
                texto: "sim, ja ouvi falar",
                afirmacao: "provavelmente você deve praticar atos que ajudam o ambiente."
                 },
                 {
                     texto: "Não, mas gostaria de saber",
                     afirmacao: "a ods 15 tem como objetivo proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade."
                      }
        ]
    },
    {
        enunciado: "Você sabe como preservar as árvores na floresta?",
        alternativas: [
            {
                texto: "sim, pois elas são muito importantes",
                afirmacao: "as arvores que protegem o meio ambiente, pois se não tivessem elas as faricas tomariam conta do oxigenio."
                 },
                 {
                     texto: "Não, pois não vejo o porque.",
                     afirmacao: "As árvores são o maior patrimônio ambiental que existe nas cidades, pois elas abrigam os pássaros, que espalham as sementes e comem os insetos. "
                      }
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
caixaAlternativas.textContent="";
mostraAlternativas();

}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa)); 
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
    caixaPerguntas.textContent = " Em 2030";
    textoResultado.textContent= historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();