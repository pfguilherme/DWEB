function funcao1()
{
    let num1 = Number(prompt("Número 1:"));
    let num2 = Number(prompt("Número 2:"));
    let num3 = Number(prompt("Número 3:"));

    alert("O maior número é: " + Math.max(num1, num2, num3));
}

function funcao2()
{
    let num1 = Number(prompt("Número 1:"));
    let num2 = Number(prompt("Número 2:"));
    let num3 = Number(prompt("Número 3:"));

    let numeros = [num1, num2, num3].sort((a, b) => a - b);
    alert("Os números em ordem crescente: " + numeros.join(", "));
}

function funcao3()
{
    let texto = prompt("Texto:").toLowerCase().replace(" ", "");
    let invertido = "";
    for (let index = texto.length - 1; index >= 0; index--)
    {
        invertido = invertido + texto[index];
    }

    if (texto == invertido)
    {
        alert("O texto é um palíndromo!");
    }
    else
    {
        alert("O texto não é um palíndromo");
    }
}

function funcao4()
{
    let palavra1 = prompt("Palavra 1:");
    let palavra2 = prompt("Palavra 2:");

    if (!palavra1 || palavra1.trim().length === 0 || !palavra2 || palavra2.trim().length === 0)
    {
        alert("ERRO! Alguma palavra está vazia");
        return;
    }

    if (palavra1.includes(palavra2))
    {
        alert("É um subconjunto");
    }
    else
    {
        alert("Não é um subconjunto");
    }
}

function funcao5()
{
    let dataString = prompt("Data no formato MM/DD/AAAA ou AAAA-MM-DD:");
    let data = new Date(dataString);

    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    alert("O dia da semana da data é: " + dias[data.getUTCDay()]);
}
