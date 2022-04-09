function listaDados(data) {
    limparTela();
    planetasCardes(data);
}

function filtroCardes(planetas) {

    let input1 = document.querySelectorAll("#buscar")[0];
    let input2 = document.querySelectorAll(".menu")[0];
    let input3 = document.querySelectorAll(".menu")[1];

    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)

    if ((input1.value == "") && (input2.value == 0) && (input3.value == 0)) {

        limparTela();
        planetasCardes(data);
        tabelaCorporativa(data);

    } else if ((input1.value == "") && (input2 != 0) && (input3 != 0)) {

        switch (input2.value) {

            case "1":
                if (input3.value == "1") {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.area > b.area ? -1 : a.area < b.area ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                } else {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.area < b.area ? -1 : a.area > b.area ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                }
                break;

            case "2":
                if (input3.value == "1") {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.sunDistance > b.sunDistance ? -1 : a.sunDistance < b.sunDistance ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                } else {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.sunDistance < b.sunDistance ? -1 : a.sunDistance > b.sunDistance ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                }
                break;

            case "3":
                if (input3.value == "1") {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.durationDay > b.durationDay ? -1 : a.durationDay < b.durationDay ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                } else {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.durationDay < b.durationDay ? -1 : a.durationDay > b.durationDay ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                }
                break;

            case "4":
                if (input3.value == "1") {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.gravity > b.gravity ? -1 : a.gravity < b.gravity ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                } else {
                    limparTela();
                    let valor = data.sort(function (a, b) { return a.gravity < b.gravity ? -1 : a.gravity > b.gravity ? 1 : 0; });
                    planetasCardes(valor);
                    tabelaCorporativa(valor);
                }
                break;
        }

    } else {
        limparTela();
        let planetasFiltrados = planetas?.filter((planeta) => planeta.name.toLowerCase().includes(input1.value));
        planetasCardes(planetasFiltrados);
        tabelaCorporativa(planetasFiltrados);
    }

}

function planetasCardes(planetas) {
    limparTela();

    planetas.forEach((planeta, index) => {

        let grupoCardes = document.getElementById("grupo-cardes");

        let divCardes = document.createElement('div');
        divCardes.setAttribute('class', 'cardes');
        divCardes.setAttribute('name', `${index}`);

        let divImagemPlanetas = document.createElement('img');
        divImagemPlanetas.setAttribute('class', 'imagem-planeta');
        divImagemPlanetas.setAttribute('onclick', `identificaDados(${index})`);
        divImagemPlanetas.src = planeta.image;

        let divNomeCardes = document.createElement('div');
        divNomeCardes.setAttribute('class', 'nome-cardes');

        let pNomePlaneta = document.createElement('p');
        pNomePlaneta.setAttribute('class', 'nome-planeta');
        pNomePlaneta.innerHTML = planeta.name;

        let divCaixaDeletaInfo = document.createElement('div');
        divCaixaDeletaInfo.setAttribute('class', 'caixa-deleta-info');

        let imgLixo = document.createElement('img');
        imgLixo.setAttribute('class', 'imgLixo');
        imgLixo.setAttribute('name', `${index}`);
        imgLixo.setAttribute('onclick', `modal(${index})`);
        imgLixo.src = '../img/lataLixo.png';

        let imgInfo = document.createElement('img');
        imgInfo.setAttribute('class', 'imgInfo');
        imgInfo.setAttribute('name', `${index}`);
        imgInfo.setAttribute('onclick', `identificaDados(${index})`);
        imgInfo.src = '../img/setaDireita.png';

        grupoCardes.appendChild(divCardes);
        divCardes.appendChild(divImagemPlanetas);
        divCardes.appendChild(divNomeCardes);
        divNomeCardes.appendChild(pNomePlaneta);
        divNomeCardes.appendChild(divCaixaDeletaInfo);
        divCaixaDeletaInfo.append(imgLixo);
        divCaixaDeletaInfo.append(imgInfo);

    });
}

function tabelaCorporativa(planetas) {

    let tabela = document.createElement('table');
    tabela.setAttribute('class', 'tabela');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let linhaTitulos = document.createElement('tr');

    let tituloPlaneta = document.createElement('th');
    tituloPlaneta.innerHTML = "Planeta";

    let tituloArea = document.createElement('th');
    tituloArea.innerHTML = "Área de superfície";

    let tituloDistancia = document.createElement('th');
    tituloDistancia.innerHTML = "Distância do sol";

    let tituloDuracao = document.createElement('th');
    tituloDuracao.innerHTML = "Duração do dia";

    let tituloGravidade = document.createElement('th');
    tituloGravidade.innerHTML = "Gravidade";

    linhaTitulos.appendChild(tituloPlaneta);
    linhaTitulos.appendChild(tituloArea);
    linhaTitulos.appendChild(tituloDistancia);
    linhaTitulos.appendChild(tituloDuracao);
    linhaTitulos.appendChild(tituloGravidade);

    thead.appendChild(linhaTitulos);

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    let caixaTabela = document.getElementById('caixa-tabela');
    caixaTabela.appendChild(tabela);

    planetas?.forEach((planeta, index) => {

        let linhaDados = document.createElement('tr');
        let ColunaDados = document.createElement('td');

        ColunaDados.innerHTML = planeta.name;
        linhaDados.appendChild(ColunaDados);
        ColunaDados = document.createElement('td');

        let respostaArea = Number(planeta.area) * Number(0.000001);
        ColunaDados.innerHTML = respostaArea.toFixed(1) + " Km²";
        linhaDados.appendChild(ColunaDados);

        ColunaDados = document.createElement('td');

        let respostaDistacia = Number(planeta.sunDistance) / Number(1000);
        ColunaDados.innerHTML = respostaDistacia + " km²";
        linhaDados.appendChild(ColunaDados);

        ColunaDados = document.createElement('td');

        let time = {
            dia: Math.floor(planeta.durationDay / 86400000),
            hora: Math.floor(planeta.durationDay / 3600000) % 24,
            minutos: Math.floor(planeta.durationDay / 60000) % 60,
            segundo: Math.floor(planeta.durationDay / 1000) % 60,
            milisegundos: Math.floor(planeta.durationDay) % 1000

        };
    
        let respostaDuracao = time.dia +"d "+ time.hora +"h " + time.minutos+"m ";
        ColunaDados.innerHTML = respostaDuracao;
        linhaDados.appendChild(ColunaDados);

        ColunaDados = document.createElement('td');

        let respostaGravidade = Number(planeta.gravity) / Number(3.6);
        ColunaDados.innerHTML = respostaGravidade.toFixed(2) + " m/s²";
        linhaDados.appendChild(ColunaDados);

        tbody.appendChild(linhaDados);

    });
}

function modal(index) {

    let fundoModal = document.querySelector('.fundo-modal');
    fundoModal.style.display = "block";

    let deletar = document.getElementById("deletar");

    deletar.addEventListener('click', () => { deletaCard(index) });

}

function deletaCard(index) {

    let i = index++;

    delete data[i];

    let novaData = data;
    originalData = novaData;
    listaDados(novaData);
    planetasCardes(novaData);
    tabelaCorporativa(novaData);

    let fundoModal = document.querySelector('.fundo-modal');
    fundoModal.style.display = "none";

}

function voltar(index) {

    let fundoModal = document.querySelector('.fundo-modal');
    fundoModal.style.display = "none";

}

function identificaDados(index) {

    window.location.href = "../html/descricaoPlaneta.html?name=" + index + "&length=";

}

function limparTela() {

    let cardes = document.querySelectorAll(".cardes");
    for (let index = 0; index < cardes.length; index++) {

        cardes[index].remove();

    }

    let tabela = document.querySelectorAll(".tabela");
    for (let index = 0; index < tabela.length; index++) {

        tabela[index].remove();

    }

}

