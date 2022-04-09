'use strict'

function procuraUsuario(dadosUsuario) {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (email != "" || senha != "") {

        let usuarioLocalizado = dadosUsuario?.filter(login => login.usuario.includes(email));

        if (usuarioLocalizado.length > 0) {

            validaUsuario(usuarioLocalizado);

        } else {

            alert('Login ou senha incorretas');

        }

    } else {

        alert('Login ou senha incorretas');

    }

}

function validaUsuario(login) {

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if ((login[0].usuario == email) && (login[0].senha == senha)) {

        window.location.href = "/html/home.html";

    } else {

        alert('Login ou senha incorretas')

    }
}