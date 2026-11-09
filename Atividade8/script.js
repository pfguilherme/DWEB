let PESSIMO = 1;
let REGULAR = 2;
let BOM = 3;
let OTIMO = 4;

let somaIdade = 0;
let idadeMaisVelha;
let idadeMaisNova;
let qtndPessimo = 0;
let qntdOtimoOuBom = 0;
let numHomens = 0;
let numMulheres = 0;
let numOutros = 0;

document.addEventListener("submit", (event) => {
    event.preventDefault();

    let idade = parseInt(document.getElementById("age").value);
    let sexo = document.querySelector("input[name   ='sex']:checked").value;
    let opniao = parseInt(document.getElementById("opnion").value);
    if (idade < 1 || isNaN(idade))
    {
        alert("Idade inválida! Deve ser maior que 0.");
        return;
    }

    somaIdade = somaIdade + idade;
    if (idade > idadeMaisVelha || idadeMaisVelha == undefined)
    {
        idadeMaisVelha = idade;
    }
    if (idadeMaisNova > idade || idadeMaisNova == undefined)
    {
        idadeMaisNova = idade;
    }
    
    if (opniao == PESSIMO)
    {
        qtndPessimo++;
    }
    else if (opniao == OTIMO || opniao == BOM)
    {
        qntdOtimoOuBom++;
    }

    if (sexo == "male")
    {
        numHomens++;
    }
    else if (sexo == "female")
    {
        numMulheres++;
    }
    else if (sexo == "other")
    {
        numOutros++;
    }

    document.getElementById("form").reset();
    AtualizarDados();
});

function AtualizarDados()
{
    let numRespostas = numHomens + numMulheres + numOutros;
    let mediaIdade = somaIdade / numRespostas;
    if (isNaN(mediaIdade))
    {
        mediaIdade = 0;
    }

    let porcentagemOtimoBom = qntdOtimoOuBom / numRespostas * 100;
    if (isNaN(porcentagemOtimoBom))
    {
        porcentagemOtimoBom = 0;
    }

    document.getElementById("total-answers").innerHTML = numRespostas;
    document.getElementById("age-average").innerHTML = mediaIdade.toFixed(2);
    document.getElementById("age-oldest").innerHTML = idadeMaisVelha || 0;
    document.getElementById("age-youngest").innerHTML = idadeMaisNova || 0;
    document.getElementById("opnion-bad").innerHTML = qtndPessimo;
    document.getElementById("opnion-good-great").innerHTML = porcentagemOtimoBom.toFixed(2);
    document.getElementById("male-quantity").innerHTML = numHomens;
    document.getElementById("female-quantity").innerHTML = numMulheres;
    document.getElementById("other-quantity").innerHTML = numOutros;
}

function VisualizarDados()
{
    document.getElementById("form-data").hidden = !document.getElementById("form-data").hidden;
    AtualizarDados();
}