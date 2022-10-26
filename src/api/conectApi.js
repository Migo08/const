import axios from 'axios';

export const connectApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

