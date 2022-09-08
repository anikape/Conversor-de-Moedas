function converter() {
    let valor = document.getElementById('valor').value;
    let moedaEstrangeira = document.getElementById('moedas').value;

    var moeda = parseFloat(moedaEstrangeira);

    let resultado = valor * moeda;

    resultado = resultado.toFixed(2);

    if (moedaEstrangeira == 0) {
        alert("Escolha a moeda")
        return;
    }

    //imagens

    if (moedaEstrangeira == "5.22") {
        document.getElementById('eua').style.display = "block";
        document.getElementById('euro').style.display = "none";
        document.getElementById('bitcoin').style.display = "none";
    } else if (moedaEstrangeira == "5.21") {
        document.getElementById('euro').style.display = "block";
        document.getElementById('eua').style.display = "none";
        document.getElementById('bitcoin').style.display = "none";
    } else if (moedaEstrangeira == "100145,00") {
        document.getElementById('bitcoin').style.display = "block";
        document.getElementById('euro').style.display = "none";
        document.getElementById('eua').style.display = "none";
    }



    document.getElementById('rate').innerHTML = "R$ " + valor + " reais equivale a " + resultado;
    document.getElementById('rate').style = 'border: 2px groove yellowgreen';
}

function zerar() {
    valor.value = 0.0
        //moedaEstrangeira.value = 0.0

    document.getElementById('rate').style.display = "none";
    document.getElementById('bitcoin').style.display = "none";
    document.getElementById('euro').style.display = "none";
    document.getElementById('eua').style.display = "none"

}

//cotação do dolar em 08/09/2022 R$ 5.22
//cotação do euro em 08/09/2022 R$ 5.21
//cotação do bitcoin em 08/09/2022 R$ 100145,00

document.getElementById('eua').style.display = 'none';
document.getElementById('euro').style.display = 'none';
document.getElementById('bitcoin').style.display = 'none';