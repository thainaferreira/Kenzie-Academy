const EXPLORADOR = 'Thaina';
let bolsaDeItens = [];
let Moedas = 0;
let energia = 5;
let recompensas = ['Chave', 'Duck, o Pato de Borracha', 'Moeda', 'Moeda', 'Moeda', 'Moeda', 'Moeda'];
//---------------------------------------------------------------------------------------------------------
function taverna(){
    console.log ('Bem vindo(a) ' + EXPLORADOR + ', você entrou na Taverna!');
    for (let i = 0; i < energia.length; i++) {
        if (energia < 5){
            console.log (EXPLORADOR + ' está descansando!');
            energia += 1;
         }else{
            return console.log(EXPLORADOR + ' está revitalizado(a)!');
         }
    }
  }
//---------------------------------------------------------------------------------------------------------
function pegarItem (item){
    for (let i = 0; i < item.length; i++){
        if (item[i] === 'Moeda'){
            console.log ('PARABÉNS ' + EXPLORADOR + '! Você ganhou uma MOEDA!')
            Moedas += 1;
        }else{
            console.log ('PARABÉNS ' + EXPLORADOR + '! Você ganhou um ITEM!')
            bolsaDeItens.push(item);
        } 
        return true;
    }
}
//---------------------------------------------------------------------------------------------------------
function batalha(){
    console.log(EXPLORADOR + ' encontrou um MONSTRO!');
    if (energia < 1){
        console.log (EXPLORADOR + ' fugiu para a Taverna.');
        return false;
    }else{
        console.log ('PARABÉNS ' + EXPLORADOR + ', você derrotou o monstro!');
        energia -= 1;
            if (energia === 0){
            console.log (EXPLORADOR + ' fugiu para a Taverna.');
            return false;
        }else{
            return true;
        }
    }
}

function explorar(){
    console.log (EXPLORADOR + ' saiu para explorar.');
    if (energia < 1){
        console.log(EXPLORADOR + ' não pode explorar!');
        taverna();
        return false;
    }else{
        if (batalha() === true){
            roletarRecompensas();
            return true;
        }else{
            taverna();
            return false;
        }
    }
}
//---------------------------------------------------------------------------------------------------------
function abrirBau (){
    for (let i = 0; i < bolsaDeItens.length; i++){
        if (bolsaDeItens[i] === 'Chave'){
            console.log('PARABÉNS' + EXPLORADOR + ', você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!')
            return true;
        }else{
            return false;
        }
    }
}