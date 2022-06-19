const movies = [
    {
        url: 'rickandmorty.jpg',
        title: 'Rick and Morty',
        text: 'Serial opowiada o przygodach ekscentrycznego, uzależnionego od alkoholu naukowca Ricka Sancheza, któremu towarzyszy jego wnuk Morty. Bohaterowie podróżują po odległych galaktykach oraz alternatywnych rzeczywistościach. W późniejszych odcinkach, sporadycznie towarzyszą im również rodzice Morty’ego: Beth i Jerry oraz jego siostra Summer. Mieszanka niestabilnego już życia rodzinnego w połączeniu z coraz to nowymi pomysłami szalonego ojca Beth dają produkcję przepełnioną nietuzinkowym, czarnym humorem. Serial opowiada o przygodach ekscentrycznego, uzależnionego od alkoholu naukowca Ricka Sancheza, któremu towarzyszy jego wnuk Morty. Bohaterowie podróżują po odległych galaktykach oraz alternatywnych rzeczywistościach. W późniejszych odcinkach, sporadycznie towarzyszą im również rodzice Morty’ego: Beth i Jerry oraz jego siostra Summer. Mieszanka niestabilnego już życia rodzinnego w połączeniu z coraz to nowymi pomysłami szalonego ojca Beth dają produkcję przepełnioną nietuzinkowym, czarnym humorem.',
    },
    {
        url: 'rickandmorty.jpg',
        title: 'Rick and Morty',
        text: 'Serial opowiada o przygodach ekscentrycznego, uzależnionego od alkoholu naukowca Ricka Sancheza, któremu towarzyszy jego wnuk Morty. Bohaterowie podróżują po odległych galaktykach oraz alternatywnych rzeczywistościach. W późniejszych odcinkach, sporadycznie towarzyszą im również rodzice Morty’ego: Beth i Jerry oraz jego siostra Summer. Mieszanka niestabilnego już życia rodzinnego w połączeniu z coraz to nowymi pomysłami szalonego ojca Beth dają produkcję przepełnioną nietuzinkowym, czarnym humorem. Serial opowiada o przygodach ekscentrycznego, uzależnionego od alkoholu naukowca Ricka Sancheza, któremu towarzyszy jego wnuk Morty. Bohaterowie podróżują po odległych galaktykach oraz alternatywnych rzeczywistościach. W późniejszych odcinkach, sporadycznie towarzyszą im również rodzice Morty’ego: Beth i Jerry oraz jego siostra Summer. Mieszanka niestabilnego już życia rodzinnego w połączeniu z coraz to nowymi pomysłami szalonego ojca Beth dają produkcję przepełnioną nietuzinkowym, czarnym humorem.',
    },
];

const createMovieDiv = (movie) => {
    return `<div class="col-lg-8 offset-lg-2 bg-white p-3 rounded-5 border border-dark mb-3">
                <div class="row p-3">
                        <div class="col-lg-4 text-center mb-3">
                        <img class="img-fluid w-100" src="../img/movies/${movie.url}" alt="" />
                        </div>
                        <div class="offset-lg-1 col-lg-6">
                        <h3>${movie.title}</h3>
                        <p class="info-scroll">${movie.text}</p>
                        </div>
                </div>
                </div>`;
};

export const createMovies = () => {
    const container = document.querySelector('#movies-container');

    container.innerHTML = '';
    movies.forEach((movie) => (container.innerHTML += createMovieDiv(movie)));
};
