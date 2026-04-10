document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Opcional: impede o pulo da página para o exemplo
        e.preventDefault();
        console.log("Navegando para:", link.textContent);
    });
});