// Масив із даними про автомобілі Alpin Motors
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

// Функція для відображення карток авто через Tailwind CSS стилі
function renderCars() {
    const container = document.getElementById('cars-container');
    if (!container) return;

    container.innerHTML = cars.map(car => `
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-blue-500/50">
            <div class="w-full h-56 overflow-hidden bg-slate-950">
                <img src="${car.image}" alt="${car.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-white mb-2">${car.title}</h3>
                <div class="text-2xl font-black text-blue-400 mb-4">${car.price}</div>
                <ul class="space-y-2 border-t border-slate-800 pt-4 mb-6 text-sm text-slate-300 flex-grow">
                    <li class="flex justify-between">
                        <span class="text-slate-400">Рік:</span>
                        <strong class="text-white">${car.year}</strong>
                    </li>
                    <li class="flex justify-between">
                        <span class="text-slate-400">Двигун:</span>
                        <strong class="text-white">${car.engine}</strong>
                    </li>
                    <li class="flex justify-between">
                        <span class="text-slate-400">Коробка:</span>
                        <strong class="text-white">${car.trans}</strong>
                    </li>
                </ul>
                <button onclick="alert('Деталі по автомобілю ${car.title}')" class="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition duration-200">
                    Детальніше
                </button>
            </div>
        </div>
    `).join('');
}

// Викликаємо функцію після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});
