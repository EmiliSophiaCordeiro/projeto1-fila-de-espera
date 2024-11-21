let filaDeEspera = [];

// Adicionando pessoas à fila
filaDeEspera.push("Matheus");
console.log("Matheus entrou na fila.");

filaDeEspera.push("Marcos");
console.log("Marcos entrou na fila.");

filaDeEspera.push("Ana");
console.log("Ana entrou na fila.");

// Função para remover uma pessoa da fila e verificar se a fila está vazia
function removerDaFila() {
    if (filaDeEspera.length === 0) {
        console.log("Fila está vazia.");
    } else {
        let consultado = filaDeEspera.shift();
        console.log(`${consultado} saiu da fila.`);
    }
}

// Removendo pessoas da fila
removerDaFila();  // Matheus saiu
removerDaFila();  // Marcos saiu
removerDaFila();  // Ana saiu
removerDaFila();  // Fila vazia
