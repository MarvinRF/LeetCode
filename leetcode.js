candles = [4, 4, 1, 3, 4];

let max = 0;
let count = 0;

for (let c of candles) {
  if (c > max) {
    max = c; // novo maior valor
    count = 1; // reinicia a contagem
  } else if (c === max) {
    count++; // encontrou outro igual ao maior
  }
}
console.log(count);

//O(n)
