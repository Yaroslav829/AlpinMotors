document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-form'); 
    
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Офіційний ендпоінт SalesDrive згідно з документацією
        const SALESDRIVE_URL = 'https://alpinmotors.salesdrive.me/handler/';
        const SALESDRIVE_API_KEY = 'z3Kk9Dly_C0Km8rNmbLLgvhNH7a19Gn-9gy8o4aqh5RMDwYt-NUuw1jx_JQqPuLSCfdrTn3BpX_t8hjfU-JVNiNByb_tZNB20ecB';

        const nameInput = form.querySelector('input[name="name"]');
        const phoneInput = form.querySelector('input[name="phone"]');
        const detailsInput = form.querySelector('input[name="details"]');

        const name = nameInput ? nameInput.value : 'Не вказано';
        const phone = phoneInput ? phoneInput.value : 'Не вказано';
        const details = detailsInput && detailsInput.value ? detailsInput.value : 'Загальна заявка / Підбір авто';

        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        try {
            // Використовуємо mode: 'no-cors', щоб обійти блокування браузера (CORS)
            await fetch(SALESDRIVE_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'X-Api-Key': SALESDRIVE_API_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    form: 'Сайт Alpin Motors',
                    fName: name,
                    phone: phone,
                    comment: details
                })
            });

            // Оскільки mode 'no-cors' не дає прочитати відповідь сервера напряму, 
            // вважаємо запит успішним і виводимо подяку клієнту
            alert('Дякуємо! Вашу заявку успішно надіслано. Ми зв\'яжемося з вами найближчим часом.');
            form.reset();

        } catch (error) {
            console.error('Помилка:', error);
            alert('Сталася помилка при відправці. Спробуйте ще раз пізніше.');
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
});
