var num = 0;

var depoimentos = [{
        nome: "Pedro Ortiz",
        texto: "A academy mudou meu jeito de encarar os problemas e achar soluções",
        imagem: "pedro.jpg"
},
    {
        nome: "Julio Brazil",
        texto: "Sem dúvidas a melhor experiência da minha vida.",
        imagem: "julio.jpg"
}, {
        nome: "Matheus Moura",
        texto: "Amei poder aprender sobre Design e desenvolver essa habilidade.",
        imagem: "matheus.jpg"
}, {
        nome: "João Gabriel Padilha",
        texto: "O projeto me preparou para o mercado de trabalho, indo muito alem da parte técnica e fortalecendo minha visão empreendedora.",
        imagem: "joao.jpg"
}, {
        nome: "Osniel Teixeira",
        texto: "Explorar tecnologias de ponta foi sempre o que mais me motivou na Academy.",
        imagem: "osniel.jpg"
}, {
        nome: "Nicholas Babo",
        texto: "A Academy me ajudou muito a melhorar minhas habilidades como desenvolvedor, mas principalmente a descobrir qualidades em mim que eu nem mesmo conhecia.",
        imagem: "babo.jpg"
}, {
        nome: "Vinícius Santos",
        texto: "Local para crescimento pessoal e profissional, vale a pena viver cada segundo.",
        imagem: "vinicius.jpg"
}, {
        nome: "Ana Carolina dos Santos",
        texto: "Durante a Academy eu aprendi e aprendo muito coisa, com as pessoas, as experiencias que vivemos lá dentro e com todos os professores.",
        imagem: "carol.jpg"
}]

window.onload = function () {
    apresentaDepoimento();
    setInterval(function () {
        apresentaDepoimento();
    }, 6000);
    for (var i = 0; i < 7; i++) {
        document.getElementById('menu' + i).addEventListener('click', onclick);
    }
}

function onclick() {
    var menu = parseInt(event.target.id.split('menu')[1]) + 1;
    var element = document.getElementById('sec' + menu);
    $('html, body').animate({ scrollTop: $(element).offset().top - 60}, 1000);
}

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if (scroll >= innerHeight * 0.9) {
        document.getElementById('header').className = 'header_off';
    } else {
        document.getElementById('header').className = '';
    }
});

function apresentaDepoimento() {

    var nome = document.getElementById("depNome");
    var texto = document.getElementById("depTexto");
    var img = document.getElementById("depImg");

    img.src = "img/alunos/" + depoimentos[num].imagem;
    nome.innerHTML = "- " + depoimentos[num].nome;
    texto.innerHTML = depoimentos[num].texto;

    num++;
    if (num == depoimentos.length) num = 0;
}