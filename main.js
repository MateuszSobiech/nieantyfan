import { setFormSubmitEvent } from './scripts/email.js';
import { loadRecentVideos } from './scripts/iFrame.js';

setFormSubmitEvent();
loadRecentVideos();

// https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFGud6qsbaAjuP6WaXAJj3Q&maxResults=9&order=date&type=video&key=AIzaSyC0BySpEn4IEB3leni5800SA5MjYEfNNpY
