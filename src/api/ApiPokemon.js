import axios from 'axios';


export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});

export const pokemonData = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})