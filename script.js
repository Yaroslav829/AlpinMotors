// Відправка заявки з форми на сайті в SalesDrive
const SALESDRIVE_HANDLER_URL = 'https://alpinmotors.salesdrive.me/handler/';
// Ключ бази заявок: SalesDrive → Установки → Загальні налаштування і інтеграції → Інші сервіси → API
const SALESDRIVE_FORM_KEY = 'z3Kk9Dly_C0Km8rNmbLLgvhNH7a19Gn-9gy8o4aqh5RMDwYt-NUuw1jx_JQqPuLSCfdrTn3BpX_t8hjfU-JVNiNByb_tZNB20ecB';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-form');
    if (!form) return;

    const button = form.querySelector('button[type="submit"]');
    const status = document.createElement('p');
    status.className = 'text-center text-sm mt-4';
    form.appendChild(status);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const body = new URLSearchParams({
            form: SALESDRIVE_FORM_KEY,
            fName: (data.get('fName') || '').trim(),
            phone: (data.get('phone') || '').trim(),
            comment: (data.get('comment') || '').trim(),
            utmPage: window.location.href
        });

        button.disabled = true;
        status.className = 'text-center text-sm mt-4 text-slate-400';
        status.textContent = 'Надсилаємо заявку...';

        try {
            // no-cors: запит доходить до SalesDrive без CORS-обмежень, відповідь браузер не показує
            await fetch(SALESDRIVE_HANDLER_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString()
            });
            form.reset();
            status.className = 'text-center text-sm mt-4 text-emerald-400';
            status.textContent = 'Дякуємо! Заявку прийнято, менеджер зв’яжеться з вами найближчим часом.';
        } catch (err) {
            console.error('SalesDrive error:', err);
            status.className = 'text-center text-sm mt-4 text-red-400';
            status.textContent = 'Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.';
        } finally {
            button.disabled = false;
        }
    });
});
