document.addEventListener('DOMContentLoaded', function() {
    // Анимация карточек при загрузке
    const cards = document.querySelectorAll('.designer-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 150 * index);
    });

    // Обработчик для кнопок "Подробнее"
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.designer-card');
            const details = card.nextElementSibling;
            
            if (details.classList.contains('designer-details')) {
                details.classList.toggle('active');
                this.textContent = details.classList.contains('active') ? 'Свернуть ↑' : 'Подробнее →';
            }
        });
    });
});