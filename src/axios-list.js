import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://comic-bot-fe2f1.firebaseio.com/'
});

export default instance;