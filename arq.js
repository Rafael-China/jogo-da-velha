
var player = "X";
var numJog = 0;
var termino = false;

function checkjogo(id) {

    var cpu = document.getElementById('pc').checked;
    var opt = verificaSrc(id);

    if (termino) {

        return false;

    }

    if (opt == "transp.png") {

        document.getElementById(id).src = "./img/" + player + ".png";

        numJog++;

        if (winchek()) {

            termino = true;
            alert("Fim de jogo " + player + " venceu!");
            return false;

        }

        if (numJog >= 9) {

            termino = true;
            alert("Fim de jogo!! Deu velha!!!");
            return false;

        }

        if (player == "X") {

            player = "O";

        } else {

            player = "X";

        }

    }

    if (cpu && player == "O") {

        checkjogo(jogoDoPc());

    }

    function jogoDoPc() {

        return 'c' + Math.floor((Math.random() * 9) + 1);

    }

}

function verificaSrc(id) {

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);

}

function winchek() {

    if (((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png") ||
        ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png") ||
        ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") ||
        ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") ||
        ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png")) {

        return true;

    }

    return false;

}