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