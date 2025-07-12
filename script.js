document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('poem');
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    poemElement.innerHTML = randomPoem;
});