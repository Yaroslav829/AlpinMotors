/// Масив із даними про автомобілі Alpin Motors
const cars = [
    {
        "id": 1,
        "title": "Volkswagen Touran",
        "price": "10 300 €",
        "year": 2015,
        "engine": "2.0 Дизель",
        "trans": "Автоматична КП",
        "image": "touran.jpg"
    },
    {
        "id": 2,
        "title": "Tesla Model Y",
        "price": "$22 000",
        "year": 2024,
        "engine": "Електро",
        "trans": "Автоматична КП",
        "image": "tesla-modely.jpg"
    },
    {
        "id": 3,
        "title": "Audi A4",
        "price": "9 130 €",
        "year": 2014,
        "engine": "2.0 Дизель",
        "trans": "Механічна КП",
        "image": "audi-a4.jpg"
    }
];

// Функція для відображення карток авто на сторінці
function renderCars() {
    const container = document.getElementById('cars-container');
    if (!container) return;

    container.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.title}" class="car-image">
            <div class="car-info">
                <h3>${car.title}</h3>
                <p class="car-price">${car.price}</p>
                <ul class="car-specs">
                    <li><strong>Рік:</strong> ${car.year}</li>
                    <li><strong>Двигун:</strong> ${car.engine}</li>
                    <li><strong>Коробка:</strong> ${car.trans}</li>
                </ul>
                <button class="btn-details">Детальніше</button>
            </div>
        </div>
    `).join('');
}

// Викликаємо функцію після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});