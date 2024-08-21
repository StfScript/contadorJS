function contar(){ 
    var inicio = document.getElementById('numeroinicio');
    var fim = document.getElementById('numerofim');
    var passo = document.getElementById('numeropasso');

//verificações

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) //Verifica se todos os campos estão preenchidos.
  
    {
window.alert('Preencha todos os campos')
return;
}

if  (Number(fim.value) <= inicio.value) //Verifica se o valor do fim é menor que do inicio. 
    {
    window.alert('O valor de "fim" deve ser maior que o do "inicio"')
    return; 
    }

if (passo.value <= 0) //Verifica se o valor de passo é menor ou igual a 0.
     { 
    window.alert('Passo inválido, considerando PASSO como 1 ')
    passo.value = 1;
    return 1; 
}
//Fim das verificações

//Inicio da contagem 
let resultado = ''; // Variável para armazenar o resultado
    // Captura a div onde o resultado será exibido
    let res = document.getElementById('resultado');

    // Faz a contagem de início até fim, incrementando pelo passo
    for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        resultado += `${i}👉 `; // Adiciona o número atual à string resultado
    }

    resultado += '🏁'; 

    // Atualiza o conteúdo da div 'resultado' com o valor da variável 'resultado'
    res.innerHTML = `${resultado}`; // Define o conteúdo da div para o resultado acumulado
}

