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
