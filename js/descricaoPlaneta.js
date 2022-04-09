'use strict'

function diretorio() {

    var menu = document.getElementsByClassName("caixa-menu")[0];
    menu.addEventListener("click", () => {

        let opecoesMenu = document.getElementsByClassName("caixa-menu")[0];

        let li = document.getElementsByTagName('li')[0];
        li.style.borderBottom = '1px solid #2A2A2A';

        opecoesMenu.classList.toggle("active");

        if (opecoesMenu.classList.contains("active")) {
            document.getElementById("menu").style.visibility = "visible";
        }
        else {
            document.getElementById("menu").style.visibility = "hidden";
        }
    });

}

function pegarParametro() {

    var url = window.location.search;
    var urlParametro = new URLSearchParams(url);
    var index = urlParametro.get('name');

    mostraDados(index);
    trocarDados(index);
    editarPlaneta(index);

}

function trocarDados(id) {

    let novoIndex = id;
    novoIndex = parseInt(novoIndex);

    let setaEsquerda = document.querySelectorAll('.seta')[0];
    setaEsquerda.setAttribute('onclick', `percorreEsquerda(${novoIndex})`);

    let setaDireita = document.querySelectorAll('.seta')[1];
    setaDireita.setAttribute('onclick', `percorreDireita(${novoIndex})`);

    let botaoSalvar = document.getElementById('form-botao-salvar');
    botaoSalvar.setAttribute('onclick', `salvarEdicao(${novoIndex})`);

}

function percorreEsquerda(novoIndex) {

    let novoID = novoIndex - 1;

    if (novoID < 0) {
        novoID = data.length - 1;
        mostraDados(novoID);
    }

    mostraDados(novoID);
    trocarDados(novoID);

}

function percorreDireita(novoIndex) {

    let novoID = novoIndex + 1;

    if (novoID > (data.length - 1)) {
        novoID = 0;
        mostraDados(novoID);
    }

    mostraDados(novoID);
    trocarDados(novoID);

}


function mostraDados(index) {

    let nome = document.getElementById('nome');
    nome.innerHTML = data[index].name;

    let descricao = document.getElementById('descricao');
    descricao.innerHTML = data[index].description;

    let imgplaneta = document.getElementById('imgplaneta');
    imgplaneta.src = data[index].image;

    let area = document.getElementById('area');
    area.innerHTML = data[index].area;

    let distacia = document.getElementById('distacia');
    distacia.innerHTML = data[index].sunDistance;

    let time = {
        
        dia: Math.floor(data[index].durationDay / 86400000),
        hora: Math.floor(data[index].durationDay / 3600000) % 24,
        minutos: Math.floor(data[index].durationDay / 60000) % 60,
        segundo: Math.floor(data[index].durationDay / 1000) % 60,
        milisegundos: Math.floor(data[index].durationDay) % 1000

    };

    let respostaDuracao = time.dia +"d "+ time.hora +"h " + time.minutos+"m ";
    let duracao = document.getElementById('duracao');
    duracao.innerHTML = respostaDuracao;

    let gravidade = document.getElementById('gravidade');
    gravidade.innerHTML = data[index].gravity;

}

function editarPlaneta(idEditar) {
    
    let inputs = document.querySelectorAll('input');

    inputs.forEach(input => {

        if (input.value != "") {

            switch (input.id) {

                case "input-nome":
                    data[idEditar].name = document.getElementById('input-nome').value;
                    break;

                case "input-area":
                    data[idEditar].area = document.getElementById('input-area').value;
                    break;

                case "input-descricao":
                    data[idEditar].description = document.getElementById('input-descricao').value;
                    break;

                case "input-distancia":
                    data[idEditar].sunDistance = document.getElementById('input-distancia').value;
                    break;

                case "input-duracao":
                    data[idEditar].durationDay = document.getElementById('input-duracao').value;
                    break;

                case "input-gravidade":
                    data[idEditar].gravity = document.getElementById('input-gravidade').value;
                    break;
            }

        }

    });

    mostraDados(idEditar);

}

function salvarEdicao(idEditar) {

    editarPlaneta(idEditar)

}

function cancelarEdicao() {

    let inputs = document.querySelectorAll('input');

    inputs.forEach(element => {

        element.value = "";

    });

}

function sliderCardes() {

    const slider = document.querySelectorAll(".container-caixas")[0];
    console.log(slider)
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });

}