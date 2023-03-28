/*Elabore um algoritimo que calcule o que  deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento .
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

codigo condição de prarametros: 
1- a vista no debito , recebe 10% de desconto;
2- a vista no dinheiro ou pix , recebe 15%de disconto ;
3- em duas  vezes, preço normal de etiqueta sem juros;
4- acia de duas vezes,  preço normal da etiqueta mais juros de 10%
*/
function aplicarDesconto(valor, desconto) {
    return (valor -(valor * (desconto/ 100 )));
}
function aplicarJurus(valor, jurus) {
    return (valor +(valor * (jurus/ 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

  
if(formaDePagamento === 1){
 console.log(aplicarDesconto(precoEtiqueta, 10));    
}else if (formaDePagamento === 2){
 console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (formaDePagamento === 3){
    console.log(precoEtiqueta );
}else {
    console.log(aplicarJurus(precoEtiqueta, 10));
}
