// Extrai o sufixo AM ou PM
const period = s.slice(-2);

// Extrai horas, minutos e segundos
let [hour, minutes, seconds] = s.slice(0, -2).split(":");

// Converte para número para facilitar operações
hour = parseInt(hour);

if (period === "AM") {
  // Caso especial: 12 AM vira 00
  if (hour === 12) hour = 0;
} else {
  // Se for PM e não for 12 PM, soma 12
  if (hour !== 12) hour += 12;
}

// Formatar com dois dígitos
hour = String(hour).padStart(2, "0");

console.log(`${hour}:${min}:${sec}`);

//O(1)
