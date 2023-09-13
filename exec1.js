//
// casa -> Casa
// CASA -> Casa
// cASa -> Casa
function letra()
{
    // 1 pega o texto
    var texto = document.getElementById("entrada");
    
    // 2 faz a modificaçao
    var letra = texto.value.charAt(0)
    var resto = texto.value.slice(1);

    // 3 devolve para o div    
    var resposta = document.getElementById("resposta");
    resposta.innerHTML = letra.toUpperCase() + resto.toLowerCase()
}

// Edir -> ridE
// Casa -> asaC
function invertido()
{
    // 1 pega o texto
    var texto = document.getElementById("entrada");

    // 2 faz a modificaçao
    
    var fim = 0;
    var novo = "";

    for (var ini = texto.value.length - 1; ini >= fim; ini--)
    {
        novo += texto.value.charAt(ini);
    }

    // 3 devolve para o div  
    var resposta = document.getElementById("resposta");
    resposta.innerHTML = novo;

}

// edir@prof.com 
// usuario: edir
// servidor: prof.com
function email()
{
    var texto = document.getElementById("entrada");
    var resposta = document.getElementById("resposta");

    var email = texto.value.split("@");
    resposta.innerHTML = "Usuario: " + email[0] + "<br>";
    resposta.innerHTML += "Servidor: " + email[1];

}

// a casa azul caiu
// cs zul ciu
function remover()
{
    var texto = document.getElementById("entrada");
    var resposta = document.getElementById("resposta");

    var novo = texto.value.replaceAll("a", "");

    resposta.innerHTML = novo;

}

// 12,00
// 000012,00
// tamanho 8
// 123456,78
// 1234567.89
function zeros()
{
    var texto = document.getElementById("entrada");
    var resposta = document.getElementById("resposta");

    var novo = texto.value.padStart(8, "0");

    resposta.innerHTML = novo;
}