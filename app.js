 var resultado = document.getElementById('resultadoTotal').innerHTML;
 
 function inserir(numero){
   let numeroInicial = document.getElementById('resultadoTotal').innerHTML;
   document.getElementById('resultadoTotal').innerHTML = numeroInicial + numero;
 }
 function limparErro(){
   document.getElementById('avisoErro').innerHTML = '';
 }

 function limpar(){
    document.getElementById('resultadoTotal').innerHTML = '';
 }

 function deletar(){
    let resultado = document.getElementById('resultadoTotal').innerHTML;
    document.getElementById('resultadoTotal').innerHTML = resultado.substring(0, resultado.length -1);
 }
 function calcular(){
    let resultado = document.getElementById('resultadoTotal').innerHTML;
    if(resultado){
      if(resultado.includes('/0')){
         document.getElementById('avisoErro').innerHTML = 'Erro! Divisão por zero.';
         limpar();
      }else {
         document.getElementById('resultadoTotal').innerHTML = eval(resultadoTotal.innerHTML);
     }
    }
   }