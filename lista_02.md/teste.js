function MultiplicarMatrizesInvestimento(matrizA, matrizB) {
    let linhasA = matrizA.length; //conta quantas linhas existem em matrizA
    let colunasA = matrizA[0].length; //conta quantas colunas existem na primeira linha da matriz A (índice 0 = 1 coluna)
    let linhasB = matrizB.length; //conta quantas linhas existem em matrizB
    let colunasB = matrizB[0].length; //conta quantas colunas existem na primeira linha da matriz B

    // Verifica se as matrizes têm o mesmo número de linhas e colunas  
    if(colunasA !== linhasB) { //colunas A diferente de linhasB
        return 'O número de colunas da primeira matriz não pode ser diferente do número de linhas da segunda matriz. Por isso, não podem ser multiplicadas.';
    }
    
    let matrizResultado = [];
    for (let i = 0; i < linhasA; i++) {
        matrizResultado[i] = [];
        for (let j = 0; j < colunasB; j++) {
            matrizResultado[i][j] = 0;
        }
    }

    //loop para multiplicação das matrizes 
    for (let i = 0; i < linhasA; i++) {
        //percorre as linhas da matrizA
        for (let j = 0; j < colunasB; j++) {
            //percorre as colunas da matrizB
            for (let k = 0; k < colunasA; k++) {
                //percorre os elementos das linhas da matrizA e das colunas da matrizB
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j]; //multiplica os elementos correspondentes 
            }
        }
    }

    return matrizResultado; 

}

//teste
let investimentosAno1 = [[2, 3], [4, 5]];
let investimentosAno2 = [[6, 7], [8, 9]];

let resultado = MultiplicarMatrizesInvestimento(investimentosAno1, investimentosAno2);
console.log("O resultado da multiplicação das matrizes é: ", resultado);