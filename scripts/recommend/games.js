const games = [
    {
        url: 'godofwar.jpg',
        title: 'God of War',
        text: 'Głównym bohaterem God of War jest ponownie Kratos. Po wypełnionych gniewem i szaleństwem greckich przygodach, które zwieńczyła destrukcja Olimpu i śmierć wielu helleńskich bogów oraz herosów, protagonista ucieka na daleką Północ, szukając wytchnienia. Na miejscu znajduje nową miłość i zakłada rodzinę. Po śmierci żony zostaje sam z młodym synem o imieniu Atreus. Niestety, spokój nie trwa zbyt długo, o czym Kratos przekonuje się, kiedy wyrusza ze swoją latoroślą rozsypać prochy zmarłej kobiety. Droga do celu usiana jest różnymi trudnościami, a na nieproszonych gości czeka armia bestii znanych z mitologii nordyckiej. W trakcie podróży Kratos musi również zmierzyć się z konsekwencjami dawnych czynów i wciąż buzującym w jego sercu niepohamowanym gniewem. Źródło: https://www.gry-online.pl/gry/god-of-war/zf3f60',
    },
    {
        url: 'godofwar.jpg',
        title: 'God of War',
        text: 'Głównym bohaterem God of War jest ponownie Kratos. Po wypełnionych gniewem i szaleństwem greckich przygodach, które zwieńczyła destrukcja Olimpu i śmierć wielu helleńskich bogów oraz herosów, protagonista ucieka na daleką Północ, szukając wytchnienia. Na miejscu znajduje nową miłość i zakłada rodzinę. Po śmierci żony zostaje sam z młodym synem o imieniu Atreus. Niestety, spokój nie trwa zbyt długo, o czym Kratos przekonuje się, kiedy wyrusza ze swoją latoroślą rozsypać prochy zmarłej kobiety. Droga do celu usiana jest różnymi trudnościami, a na nieproszonych gości czeka armia bestii znanych z mitologii nordyckiej. W trakcie podróży Kratos musi również zmierzyć się z konsekwencjami dawnych czynów i wciąż buzującym w jego sercu niepohamowanym gniewem. Źródło: https://www.gry-online.pl/gry/god-of-war/zf3f60',
    },
];

const createGameDiv = (game) => {
    return `<div class="col-lg-8 offset-lg-2 bg-white p-3 rounded-5 border border-dark mb-3">
                <div class="row p-3">
                        <div class="col-lg-4 text-center mb-3">
                        <img class="img-fluid w-100" src="../img/games/${game.url}" alt="" />
                        </div>
                        <div class="offset-lg-1 col-lg-6">
                        <h3>${game.title}</h3>
                        <p class="info-scroll">${game.text}</p>
                        </div>
                </div>
        </div>`;
};

export const createGames = () => {
    const container = document.querySelector('#games-container');

    container.innerHTML = '';
    games.forEach((game) => (container.innerHTML += createGameDiv(game)));
};
