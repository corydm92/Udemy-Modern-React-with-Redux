import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID a05eb115b2bfb1877a41030adf4fd07615f0c1cef6a70b0c8a44eaaf74401c8d'
    }
});


