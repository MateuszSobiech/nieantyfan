export const loadRecentVideos = () => {
    fetch(
        'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFGud6qsbaAjuP6WaXAJj3Q&maxResults=9&order=date&type=video&key=AIzaSyC0BySpEn4IEB3leni5800SA5MjYEfNNpY'
    )
        .then((response) => response.json())
        .then((data) => createVideosDOM(data));
    // const data = {
    //     kind: 'youtube#searchListResponse',
    //     etag: 'j4H_H0CpbAwQBPge1QcSMb_vTPU',
    //     nextPageToken: 'CAkQAA',
    //     regionCode: 'PL',
    //     pageInfo: {
    //         totalResults: 720,
    //         resultsPerPage: 9,
    //     },
    //     items: [
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'xlYxCNMSoPqW4v3axZXadSN0W70',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: '4dWDWMEdpeA',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-19T08:00:06Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'iPhone 13 Pro po (prawie) ROKU | Czy czekać na 14 Pro?',
    //                 description: 'Smartfony z iOS oraz Android: https://ktr.fan/3FekBtz ➡️ Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/4dWDWMEdpeA/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/4dWDWMEdpeA/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/4dWDWMEdpeA/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-19T08:00:06Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: '5UV4pIIOkwlY4CBHJwtXigJQmjU',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'XI_JvEP6hYg',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-14T15:00:15Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'Tego ludzie potrzebowali! | realme GT Neo 3 150W | RECENZJA',
    //                 description: 'Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb ➡️ Smartfony z iOS oraz Android: https://ktr.fan/3FekBtz ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/XI_JvEP6hYg/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/XI_JvEP6hYg/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/XI_JvEP6hYg/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-14T15:00:15Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'vbg2kH7dj3-Ea-ay-V3FCxfSOlM',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'v6uj77nH_M0',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-13T15:00:39Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'MX Master 3S &amp; MX Mechanical | W pogoni za IDEAŁEM + KONKURS',
    //                 description: 'Logitech MX Mechanical: https://ktr.fan/Logitech-MX-Keyboard ➡️ Logitech MX Master 3s: https://ktr.fan/Logitech-MXMaster-3s ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/v6uj77nH_M0/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/v6uj77nH_M0/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/v6uj77nH_M0/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-13T15:00:39Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'I8PlYkYVdvOdcA-9LPrF7-8MFG8',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'flwDSwX1wmk',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-10T17:30:34Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'To FATALNY czas na zakup (każdej) elektroniki! | subiektywnie',
    //                 description: 'Produkty Apple: https://ktr.fan/Apple-M1 ➡️ Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb FUTURA Podcast: ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/flwDSwX1wmk/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/flwDSwX1wmk/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/flwDSwX1wmk/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-10T17:30:34Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'WR4L5cCIcJmzhkUpkyEDuRcr6X0',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'EceANp_yukY',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-08T16:00:07Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'iOS 16 jak Android! | Wszystko co musisz wiedzieć',
    //                 description: 'Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb ➡️ Smartfony z iOS oraz Android: https://ktr.fan/3FekBtz ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/EceANp_yukY/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/EceANp_yukY/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/EceANp_yukY/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-08T16:00:07Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'DKQHvrKiRazGcpf7KrvpYHuHXLE',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: '4qshlNFqH2Q',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-07T07:00:06Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'Nowy MacBook Air z M2 oraz iOS 16 oficjalnie! | #pokonferencji',
    //                 description: 'Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb ➡️ Smartfony z iOS oraz Android: https://ktr.fan/3FekBtz ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/4qshlNFqH2Q/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/4qshlNFqH2Q/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/4qshlNFqH2Q/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-07T07:00:06Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'OMqQxwSloVznYpLXC2zu-5VznfE',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'tfMQVVK8fUU',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-06T14:00:11Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'Desk Setup Tour 2022 | Marzenia spełnione!',
    //                 description: 'Logitech MX Mechanical: https://ktr.fan/Logitech-MX-Keyboard ➡️ Logitech MX Master 3s: https://ktr.fan/Logitech-MXMaster-3s ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/tfMQVVK8fUU/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/tfMQVVK8fUU/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/tfMQVVK8fUU/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-06T14:00:11Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'yjBPWGrFw0tczPZu3vcELuMihOM',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'o3mcqdjzunk',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-06-05T08:00:14Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'Sony LinkBuds | POGROMCY AirPods? | RECENZJA',
    //                 description: 'Słuchawki Sony: https://ktr.fan/Sony-sluchawki ➡️ Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb FUTURA ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/o3mcqdjzunk/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/o3mcqdjzunk/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/o3mcqdjzunk/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-06-05T08:00:14Z',
    //             },
    //         },
    //         {
    //             kind: 'youtube#searchResult',
    //             etag: 'zRs30Ld__AcT_G7xDYc00tE9tDc',
    //             id: {
    //                 kind: 'youtube#video',
    //                 videoId: 'cTY4xKbl1-Q',
    //             },
    //             snippet: {
    //                 publishedAt: '2022-05-30T16:00:13Z',
    //                 channelId: 'UCFGud6qsbaAjuP6WaXAJj3Q',
    //                 title: 'Samsung i Apple z problemami oraz nowy Xbox! | subiektywnie',
    //                 description: 'Zniżki na wszystkie produkty Green Cell: https://bit.ly/3qSTmgb ➡️ Smartfony z iOS oraz Android: https://ktr.fan/3FekBtz ...',
    //                 thumbnails: {
    //                     default: {
    //                         url: 'https://i.ytimg.com/vi/cTY4xKbl1-Q/default.jpg',
    //                         width: 120,
    //                         height: 90,
    //                     },
    //                     medium: {
    //                         url: 'https://i.ytimg.com/vi/cTY4xKbl1-Q/mqdefault.jpg',
    //                         width: 320,
    //                         height: 180,
    //                     },
    //                     high: {
    //                         url: 'https://i.ytimg.com/vi/cTY4xKbl1-Q/hqdefault.jpg',
    //                         width: 480,
    //                         height: 360,
    //                     },
    //                 },
    //                 channelTitle: 'nieantyfan',
    //                 liveBroadcastContent: 'none',
    //                 publishTime: '2022-05-30T16:00:13Z',
    //             },
    //         },
    //     ],
    // };
    // createVideosDOM(data);
};

const createVideosDOM = (data) => {
    const row = document.querySelector('#videos-row');
    const { items } = data;

    row.innerHTML = '';
    items.forEach((item, index) => (index < 3 ? (row.innerHTML += getMobileFrame(item.id.videoId)) : (row.innerHTML += getFrame(item.id.videoId))));
};

const getFrame = (id) => {
    return `<div class="col-lg-4 d-none-sm">
                    <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/${id}"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                    ></iframe>
            </div>`;
};
const getMobileFrame = (id) => {
    return `<div class="col-lg-4">
                    <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/${id}"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                    ></iframe>
            </div>`;
};
