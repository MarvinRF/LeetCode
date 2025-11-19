function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const min = arr.slice(0, 4).reduce((a, b) => a + b);
  const max = arr.slice(1).reduce((a, b) => a + b);
  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);

//sort
// Ordena o array em ordem crescente.
// Necessário para pegar facilmente os 4 menores e os 4 maiores.
// sort() com comparador numérico é O(n log n)

//const min = arr.slice(0, 4).reduce((a, b) => a + b);
// Calcula a soma dos 4 primeiros elementos (os menores).
// slice(0,4) → cria uma cópia contendo apenas os índices 0,1,2,3
// reduce() → soma os valores desse novo array
// slice() é O(k) e reduce() é O(k), mas aqui k = 4 → tempo constante O(1)

//  const max = arr.slice(1).reduce((a, b) => a + b);
// Calcula a soma dos 4 últimos elementos (os maiores).
// slice(1) → copia do índice 1 até o final → os maiores valores
// reduce() → soma todos

//Tempo: O(n log n) (ordenar domina)
