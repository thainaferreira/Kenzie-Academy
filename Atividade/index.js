function nota (arrayNotas) {
    for (let i = 0; i < arrayNotas.length; i++){
        let aluno = arrayNotas[i];
        console.log ('Aluno ' + i);
        }
    for (let j = 0; j < arrayNotas.length; j++){
        let notas = aluno[j];
            if (notas[j] > [3]){
                return console.log (notas + ', ' + 'A nota ' + [4] + ' é um bônus!');
            }else{
                console.log (notas + ', ');
            }
        }
    }
function somarNotas (arrayNotas, nota) {
    for (j = 0; j < notas.length; j++){
        let soma = soma + notas[j];
    }
    console.log ('A soma das notas do aluno ' + i +' é: ' + soma);
}
function calcularMedia (arrayNotas, nota, somarNotas) {
    while (j < notas.length) {
        mediaTotal = soma / notas[j];
            console.log ('A media do aluno ' + i + 'é: ' + mediaTotal);
        j++
    }
}
function avaliacao (arrayNotas, calcularMedia){
    if(mediaTotal === 100){
        console.log('O aluno passou com nota maxima!')
    } else if (mediaTotal >= 70) {
        console.log('O aluno passou!')
     } else {
        console.log('O aluno reprovou!')
    }
}