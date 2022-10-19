import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.zapfy.me/v1',
    headers: {
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'User-Agent': 'request',
        'Content-Type': 'application/json',
    }
});