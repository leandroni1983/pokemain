import axios from 'axios';


export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});
export const pokemonData = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});


export const pdata = async (name) =>{
    const data = await pokemonApi(`pokemon/${name}`)
    return data
}