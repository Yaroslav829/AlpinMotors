// Масив із даними про автомобілі Alpin Motors із зазначенням регіону (region: 'us' або 'eu')
const carsData = [
    // --- ЄВРОПА ---
    {
        id: 1,
        region: 'eu',
        title: 'Volkswagen Golf VI 1.4 TSI Highline',
        year: 2009,
        mileage: '130 000 км',
        engine: '1.4 л Бензин',
        trans: 'Автомат',
        price: '5,150 $',
        marketUaPrice: '6,400 $',
        savings: 'Економія ~1 250 $',
        image: 'images/golf6.jpg'
    },
    {
        id: 2,
        region: 'eu',
        title: 'Peugeot 3008 1.6 THP Féline',
        year: 2016,
        mileage: '167 000 км',
        engine: '1.6 л Бензин',
        trans: 'Автомат',
        price: '7,850 €',
        marketUaPrice: '11,670 €',
        savings: 'Економія ~3 820 €',
        image: 'images/peugeot3008.jpg'
    },
    {
        id: 3,
        region: 'eu',
        title: 'BMW 3er 318i',
        year: 2010,
        mileage: '157 000 км',
        engine: '2.0 л',
        trans: 'Механіка',
        price: '5,870 €',
        marketUaPrice: '8,200 €',
        savings: 'Економія ~2 330 €',
        image: 'images/bmw3.jpg'
    },
    {
        id: 4,
        region: 'eu',
        title: 'Mitsubishi Outlander 2.0 MIVEC',
        year: 2010,
        mileage: '189 000 км',
        engine: '2.0 л Бензин',
        trans: 'Автомат',
        price: '7,860 €',
        marketUaPrice: '10,300 €',
        savings: 'Економія ~2 440 €',
        image: 'images/outlander.jpg'
    },
    {
        id: 5,
        region: 'eu',
        title: 'Skoda Octavia 2.0 TDI RS',
        year: 2012,
        mileage: '174 000 км',
        engine: '2.0 л Дизель',
        trans: 'Автомат',
        price: '5,100 €',
        marketUaPrice: '7,500 €',
        savings: 'Економія ~2 400 €',
        image: 'images/octavia.jpg'
    },
    {
        id: 6,
        region: 'eu',
        title: 'Renault Megane 1.5 dCi BOSE',
        year: 2012,
        mileage: '163 000 км',
        engine: '1.5 л Дизель',
        trans: 'Механіка',
        price: '4,870 €',
        marketUaPrice: '7,400 €',
        savings: 'Економія ~2 530 €',
        image: 'images/megane.jpg'
    },
    {
        id: 7,
        region: 'eu',
        title: 'Peugeot 508 2.0 HDi Hybrid4 RXH',
        year: 2012,
        mileage: '195 000 км',
        engine: '2.0 л Дизель (Гібрид)',
        trans: 'Автомат',
        price: '6,870 €',
        marketUaPrice: '9,000 €',
        savings: 'Економія ~2 130 €',
        image: 'images/peugeot508.jpg'
    },

    // --- АМЕРИКА ---
    {
        id: 8,
        region: 'us',
        title: 'Volkswagen Tiguan R-Line Black',
        year: 2019,
        mileage: '64 000 миль',
        engine: '2.0 л Бензин',
        trans: 'Автомат',
        price: '12,380 $',
        marketUaPrice: '16,400 $',
        savings: 'Економія ~4 020 $',
        image: 'images/tiguan.jpg'
    },
    {
        id: 9,
        region: 'us',
        title: 'Audi A4 Premium',
        year: 2018,
        mileage: '97 000 миль',
        engine: '2.0 л Бензин',
        trans: 'Автомат',
        price: '13,150 $',
        marketUaPrice: '15,700 $',
        savings: 'Економія ~2 550 $',
        image: 'images/audia4.jpg'
    },
    {
        id: 10,
        region: 'us',
        title: 'BMW 330i xDrive',
        year: 2018,
        mileage: '101 000 миль',
        engine: '2.0 л Бензин',
        trans: 'Автомат',
        price: '11,230 $',
        marketUaPrice: '16,500 $',
        savings: 'Економія ~5 270 $',
        image: 'images/bmw330.jpg'
    },
    {
        id: 11,
        region: 'us',
        title: 'Ford Escape SE',
        year: 2019,
        mileage: '108 000 миль',
        engine: '1.6 л Бензин',
        trans: 'Автомат',
        price: '9,670 $',
        marketUaPrice: '11,300 $',
        savings: 'Економія ~1 630 $',
        image: 'images/escape.jpg'
    }
];

let currentRegion = 'all'; // Початковий стан: усі авто

function renderCars() {
    const container = document.getElementById('cars-container');
    if (!container) return;

    // Фільтруємо масив carsData залежно від обраного регіону
    const filteredCars = currentRegion === 'all' 
        ? carsData 
        : carsData.filter(car => car.region === currentRegion);

    if (filteredCars.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-500 text-sm">
                Автомобілі у цьому напрямку оновлюються. Зверніться до менеджера для індивідуального підбору!
            </div>
        `;
        return;
    }

    container.innerHTML = filteredCars.map(car => `
        <div class="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-blue-500/50 animate-fade-in">
            <div class="w-full h-56 overflow-hidden bg-slate-950 relative">
                <img src="${car.image}" alt="${car.title}" class="w-full h-full object-cover">
                <div class="absolute top-3 right-3 bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    ${car.savings}
                </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-white mb-2">${car.title}</h3>
                
                <div class="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 mb-4">
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-xs text-slate-400">Ціна у нас:</span>
                        <span class="text-xl font-black text-blue-400">${car.price}</span>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-slate-800/60">
                        <span class="text-xs text-slate-400">В Україні (в середньому):</span>
                        <span class="text-sm font-bold text-slate-300 line-through">${car.marketUaPrice}</span>
                    </div>
                </div>

                <ul class="space-y-2 border-t border-slate-800 pt-3 mb-6 text-sm text-slate-300 flex-grow">
                    <li class="flex justify-between">
                        <span class="text-slate-400">Рік:</span>
                        <strong class="text-white">${car.year}</strong>
                    </li>
                    <li class="flex justify-between">
                        <span class="text-slate-400">Пробіг:</span>
                        <strong class="text-white">${car.mileage}</strong>
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

                <a href="#lead-form" class="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition duration-200 text-center block uppercase text-xs tracking-wider">
                    Відправити заявку
                </a>
            </div>
        </div>
    `).join('');
}

// Функція перемикання регіонів з анімацією
function switchRegion(region) {
    currentRegion = region;
    
    // Оновлюємо стилі кнопок управління
    document.querySelectorAll('.region-btn').forEach(btn => {
        if (btn.dataset.region === region) {
            btn.classList.add('bg-blue-600', 'border-blue-500', 'text-white', 'shadow-lg', 'shadow-blue-600/30');
            btn.classList.remove('bg-slate-900/80', 'border-slate-800', 'text-slate-400');
        } else {
            btn.classList.remove('bg-blue-600', 'border-blue-500', 'text-white', 'shadow-lg', 'shadow-blue-600/30');
            btn.classList.add('bg-slate-900/80', 'border-slate-800', 'text-slate-400');
        }
    });

    // Ефект анімації виїзду машинки та оновлення каталогу
    const carAnimWrapper = document.getElementById('car-drive-anim');
    if (carAnimWrapper) {
        carAnimWrapper.classList.remove('drive-anim-active');
        void carAnimWrapper.offsetWidth; // перезапуск тригера анімації
        carAnimWrapper.classList.add('drive-anim-active');
    }

    // Рендеримо авто з невеликою затримкою під анімацію
    setTimeout(() => {
        renderCars();
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCars();
});