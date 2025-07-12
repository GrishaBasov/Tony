document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('poem');
    // Получаем случайный стих из массива
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    // Вставляем стих в контейнер как HTML (а не как текст)
    poemElement.innerHTML = randomPoem;
});