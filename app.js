
 alert('Boas vindas ao jogo do numero secreto'); 
 let numeroMaximo = 5000;
 let numeroSecreto  = parseInt(Math.random() * numeroMaximo + 1);
 console.log(numeroSecreto);
 let chute;
 let tentativas = 1;

 // enquanto o chute não for igual ao numero secreto continue
 while(chute != numeroSecreto) {
     chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
     //se o chute for igual ao número secreto  
     if (chute  == numeroSecreto ) {
          break;
     } else { 
          if (chute > numeroSecreto) {
             alert(`O numero secreto é menor que ${chute}`);
          } else {
             alert(`O numero secreto é maior que ${chute}`);
          }
          // tentativas = tentativas + 1;
          tentativas++;
     }
 }
 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//  if(tentativas > 1) {
//    alert(`voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//  } else {
//    alert(`voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);''
//  }
