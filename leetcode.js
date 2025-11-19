const arr = [1, 1, 3, 2, 1];
// O problema diz que os valores vão de 0 a 99
const freq = new Array(100).fill(0);

// Conta quantas vezes cada valor aparece
for (let num of arr) {
  freq[num]++;
}

console.log(freq);

//Tempo: O(n)
//Percorremos o array apenas uma vez.

//Espaço: O(1)

//O array de frequência sempre tem tamanho fixo (100 posições).
//Mesmo que o input cresça, o espaço não cresce.
