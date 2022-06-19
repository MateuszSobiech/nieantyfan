const phones = [
    {
        title: 'realme GT Neo 3',
        url: 'gt.jpg',
        price: '3 299zł',
        description: '6.7" OLED 120Hz | Dimensity 8100 | 12/256GB | 5G | 3+1 Kamera | 50+8+2MP | NFC | Android 12',
        parameters: [
            {
                text: 'Przekątna wyświetlacza',
                value: '6.7 cale',
            },
            {
                text: 'Pamięć Flash',
                value: '256 GB',
            },
            {
                text: 'System operacyjny',
                value: 'Android 12',
            },
            {
                text: 'Rozdzielczość',
                value: '2412 x 1080 piksele',
            },
            {
                text: 'Aparat fotograficzny z tyłu',
                value: '50 Mpix',
            },
            {
                text: 'Drugi aparat fotograficzny z tyłu',
                value: '8 Mpix',
            },
            {
                text: 'Trzeci aparat fotograficzny z tyłu',
                value: '2 Mpix',
            },
            {
                text: 'Transmisja danych',
                value: '12 GB',
            },
            {
                text: 'Przekątna wyświetlacza',
                value: '5G',
            },
        ],
        videoLink: 'https://www.youtube.com/watch?v=XI_JvEP6hYg',
        buyLink: 'https://www.komputronik.pl/product/759723/realme-gt-neo-3-12-256gb-nitro-blue.html',
    },
    {
        title: 'realme GT Neo 3',
        url: 'gt.jpg',
        price: '3 299zł',
        description: '6.7" OLED 120Hz | Dimensity 8100 | 12/256GB | 5G | 3+1 Kamera | 50+8+2MP | NFC | Android 12',
        parameters: [
            {
                text: 'Przekątna wyświetlacza',
                value: '6.7 cale',
            },
            {
                text: 'Pamięć Flash',
                value: '256 GB',
            },
            {
                text: 'System operacyjny',
                value: 'Android 12',
            },
            {
                text: 'Rozdzielczość',
                value: '2412 x 1080 piksele',
            },
            {
                text: 'Aparat fotograficzny z tyłu',
                value: '50 Mpix',
            },
            {
                text: 'Drugi aparat fotograficzny z tyłu',
                value: '8 Mpix',
            },
            {
                text: 'Trzeci aparat fotograficzny z tyłu',
                value: '2 Mpix',
            },
            {
                text: 'Transmisja danych',
                value: '12 GB',
            },
            {
                text: 'Przekątna wyświetlacza',
                value: '5G',
            },
        ],
        videoLink: 'https://www.youtube.com/watch?v=XI_JvEP6hYg',
        buyLink: 'https://www.komputronik.pl/product/759723/realme-gt-neo-3-12-256gb-nitro-blue.html',
    },
];

const createLiList = (parameters) => {
    return parameters.map((parameter) => `<li>${parameter.text}: <strong>${parameter.value}</strong></li>`).join('');
};

const createPhoneDiv = (phone) => {
    const liList = createLiList(phone.parameters);

    return `<div class="col-lg-8 offset-lg-2 bg-white p-3 rounded-5 border border-dark mb-3">
                <div class="row">
                        <h3 class="text-center">${phone.title}</h3>

                        <div class="col-lg-4 text-center">
                                <img class="img-fluid w-100" src="../img/phones/${phone.url}" alt="" />
                                <p class="fs-2 fw-bold text-danger w-100">${phone.price}</p>
                        </div>

                        <div class="offset-lg-1 col-lg-6 d-flex flex-column justify-content-center mb-3">
                                <p class="text-muted">${phone.description}</p>
                                <ul class="list-unstyled">
                                        ${liList}
                                </ul>
                                
                                ${phone.videoLink ? `<strong>Video na kanale: <a href="${phone.videoLink}"> LINK </a></strong>` : ''}
                        </div>
                </div>

                <div class="col-lg-3 ms-lg-4 d-flex justify-content-center">
                        <a href="${phone.buyLink}" class="link-dark text-decoration-none">
                        <button type="button" class="btn btn-warning w-100">Sprawdz w sklepie <i class="bi bi-arrow-right-circle-fill"></i></button>
                        </a>
                </div>
        </div>`;
};

export const createPhones = () => {
    const container = document.querySelector('#phones-container');

    container.innerHTML = '';
    phones.forEach((phone) => (container.innerHTML += createPhoneDiv(phone)));
};
