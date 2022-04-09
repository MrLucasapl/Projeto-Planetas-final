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

function enviarImg(event) {

    let arquivo = event.target.files[0];

    if (arquivo) {
        subirImagem(arquivo);
    }
}

function subirImagem(arquivo) {

    let arquivoImg = document.getElementById('addfoto');

    if (arquivo.type.startsWith("image/")) {
        const lerArquivo = new FileReader();

        lerArquivo.readAsDataURL(arquivo);
        lerArquivo.onload = () => {

            arquivoImg.style.backgroundImage = `url('${lerArquivo.result}')`;
            var imageFile = lerArquivo.result;
            document.getElementById('addfoto').value = imageFile;

        };
    } else {
        arquivoImg.style.backgroundImage = null;
        imageFile = null;
    }

}

function salvarNovoPlaneta() {

    var novoPlaneta = new Object;

    novoPlaneta = {
        "name": document.getElementById('input-nome').value,
        "image": document.getElementById("addfoto").style.backgroundImage.replace('url("', '').slice(0, -2),
        "description": document.getElementById('input-descricao').value,
        "area": document.getElementById('input-area').value,
        "durationDay": document.getElementById('input-duracao').value,
        "sunDistance": document.getElementById('input-distancia').value,
        "gravity": document.getElementById('input-gravidade').value
    }

    data.push(novoPlaneta);
    salvardadosdoarquivo(data);

}

async function salvardadosdoarquivo(data) {
    const arquivoSalvar = await window.showSaveFilePicker();
    const fluxoArquivo = await arquivoSalvar.createWritable();
    await fluxoArquivo.write(new Blob([JSON.stringify({ data })], { type: "text/plain" }));
    await fluxoArquivo.close();
}


function validaCampo() {

    let inputs = document.querySelectorAll('input');

    inputs.forEach(input => {

        if (input.value == "") {
            alert("Por Favor, Informe todos os campos!");
            return;
        }

    });

    salvarNovoPlaneta();

}

function botaoSalvar() {

    validaCampo();

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