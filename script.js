function computerPlay() {
    let a;
    a = Math.floor(Math.random() * 3);
    if (a == 0) {
        return "piedra";
    } else if (a == 1) {
        return "papel"
    } else {
        return "tijera";
    }
}


function playerSelection() {
    let a = prompt("Digita piedra, papel o tijera!");
    a = a.toLowerCase();
    return a;
}


function gameplay(playerSelection, computerSelection) {
    console.log("La maquina tiro: " + computerSelection);
    if (playerSelection == computerSelection) {
        console.log("Ha sido un empate por " + playerSelection);
    } else if (playerSelection != computerSelection) {
        switch (playerSelection) {
            case "tijera":
                if (computerSelection == "piedra") {
                    return console.log("Tu pierdes... tijera pierde contra piedra");
                } else {
                    return console.log("Tu ganas! tijera gana a papel");
                }
                break;
            case "papel":
                if (computerSelection == "tijera") {
                    return console.log("Tu pierdes... papel pierde contra tijera");
                } else {
                    return console.log("Tu ganas! papel gana a piedra");
                }
                break;
            case "piedra":
                if (computerSelection == "papel") {
                    return console.log("Tu pierdes... piedra pierde contra papel");
                } else {
                    return console.log("Tu ganas! pidra gana a tijera");
                }
                break;
            default:
                return console.log("Esto ha sido un error");
        }
    }
}

gameplay(playerSelection(), computerPlay());