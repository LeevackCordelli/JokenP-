const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const aguard = document.querySelector(".aguard")
const result = document.querySelector(".result")
const suaPontuacao = document.querySelector(".sua")
const pontuacaodele = document.querySelector(".dele")

let sua = 0
let dele = 0

const GAME_OPTIONS = {
PEDRA : "pedra",
PAPEL : "papel",
TESOURA : "tesoura"

}

const humanClick = escolha => {

    play(escolha, iaChoise())
}

const iaChoise = () => {

    const options = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const random = Math.floor(Math.random() * 3)
    return options[random]

}



const play = (human, machine) => {

    console.log("humano:" + human + ",maquina:" + machine)

    aguard.innerHTML = "aguardando oponente"
    result.innerHTML = ""
    setTimeout(() => {
        aguard.innerHTML = ""

        if (human === machine) {

            result.innerHTML = "Empate!"
        } else if ((human === GAME_OPTIONS.PEDRA  && machine === GAME_OPTIONS.PAPEL) ||
            (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.TESOURA) ||
            (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PEDRA)) {
            result.innerHTML = `você: ${human}<br> oponente: ${machine} <br> VOCÊ PERDEU!`
            dele++
            pontuacaodele.innerHTML = dele
        }
        else {
            result.innerHTML = `você: ${human}<br> oponente: ${machine} <br> VOCÊ GANHOU!`
            sua++
            suaPontuacao.innerHTML = sua
        }

    }, 2000);


}










