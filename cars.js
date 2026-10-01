// Масив із даними про автомобілі Alpin Motors
const cars = [
    {
        id: 1,
        title: "Volkswagen Touran",
        price: "10 300 €",
        year: 2015,
        engine: "2.0 Дизель",
        trans: "Автоматична КП",
        image: "touran.jpg"
    },
    {
        id: 2,
        title: "Tesla Model Y",
        price: "$22 000",
        year: 2024,
        engine: "Електро",
        trans: "Автоматична КП",
        image: "tesla-modely.jpg"
    },
    {
        id: 3,
        title: "Audi A4",
        price: "9 130 €",
        year: 2014,
        engine: "2.0 Дизель",
        trans: "Механічна КП",
        image: "audi-a4.jpg"
    }
];

// Функція для відображення карток авто через Tailwind CSS стилі
function renderCars() {
    const container = document.getElementById('cars-container');
    if (!container) return;

    container.innerHTML = cars.map(car => `
        <div class="bg-slate-900/90 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-blue-500/50 transition-all duration-300">
            <div>
                <!-- Зображення та бейджі -->
                <div class="relative h-56 overflow-hidden bg-slate-950">
                    <img src="${car.image}" alt="${car.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        ${car.year} рік
                    </div>
                    <div class="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        В наявності / Під замовлення
                    </div>
                </div>

                <!-- Контент -->
                <div class="p-6">
                    <h3 class="text-xl font-black text-white uppercase tracking-wide mb-2 group-hover:text-blue-400 transition-colors">
                        ${car.title}
                    </h3>
                    <div class="text-2xl font-black text-blue-400 mb-5 tracking-tight">
                        ${car.price}
                    </div>

                    <!-- Характеристики з іконками -->
                    <ul class="space-y-3 border-t border-slate-800/80 pt-4 mb-6 text-sm text-slate-300">
                        <li class="flex items-center justify-between">
                            <span class="text-slate-400 flex items-center gap-2">
                                <i class="fa-solid fa-gauge-high text-blue-500/80 w-4"></i> Двигун:
                            </span>
                            <strong class="text-white font-semibold">${car.engine}</strong>
                        </li>
                        <li class="flex items-center justify-between">
                            <span class="text-slate-400 flex items-center gap-2">
                                <i class="fa-solid fa-gears text-blue-500/80 w-4"></i> Коробка:
                            </span>
                            <strong class="text-white font-semibold">${car.trans}</strong>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Кнопка дії -->
            <div class="p-6 pt-0">
                <button onclick="alert('Деталі по автомобілю ${car.title}')" class="w-full bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 font-extrabold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10">
                    <span>Детальніше про авто</span>
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Викликаємо функцію після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});
