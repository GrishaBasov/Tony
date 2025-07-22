document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('poem');
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];


    poemElement.innerHTML = randomPoem.split('\n').map(line => line.trim() === ''
            ? '<div class="empty-line"></div>'
            : `<span class="poem-line">${line}</span><br>`
    ).join('');
});