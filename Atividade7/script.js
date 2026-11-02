let jogador = prompt("Pedra, papel ou tesoura?");

let computador = Math.random();
let escolha_computador;
if (computador < 0.33)
{
    escolha_computador = "pedra";
}
else if (computador < 0.66)
{
    escolha_computador = "papel";
}
else
{
    escolha_computador = "tesoura";
}

alert("Jogador escolheu: " + jogador.toLowerCase() + "\nComputador escolheu: " + escolha_computador);

let vencedor;

const COMPUTADOR_VENCEU = -1;
const EMPATE = 0;
const JOGADOR_VENCEU = 1;

if (jogador.toLowerCase() == "pedra")
{
    if (escolha_computador == "pedra")
    {
        vencedor = EMPATE;
    }
    else if (escolha_computador == "papel")
    {
        vencedor = COMPUTADOR_VENCEU;
    }
    else if (escolha_computador == "tesoura")
    {
        vencedor = JOGADOR_VENCEU;
    }
}
else if (jogador.toLowerCase() == "papel")
{
    if (escolha_computador == "pedra")
    {
        vencedor = JOGADOR_VENCEU;
    }
    else if (escolha_computador == "papel")
    {
        vencedor = EMPATE;
    }
    else if (escolha_computador == "tesoura")
    {
        vencedor = COMPUTADOR_VENCEU;
    }
}
else if (jogador.toLowerCase() == "tesoura")
{
    if (escolha_computador == "pedra")
    {
        vencedor = COMPUTADOR_VENCEU;
    }
    else if (escolha_computador == "papel")
    {
        vencedor = JOGADOR_VENCEU;
    }
    else if (escolha_computador == "tesoura")
    {
        vencedor = EMPATE;
    }
}

if (vencedor == COMPUTADOR_VENCEU)
{
    alert("O computador venceu!");
}
else if (vencedor == EMPATE)
{
    alert("Foi um empate!");
}
else if (vencedor == JOGADOR_VENCEU)
{
    alert("O jogador venceu!");
}