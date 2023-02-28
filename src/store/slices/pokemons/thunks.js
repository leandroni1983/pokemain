import axios from 'axios';
import { pokemonApi, pokemonData } from '../../../api/ApiPokemon';
import { setPokemons, setPokemonsData, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}

export  const getPokemonsData = (url) =>{
    return async(dispatch,getState) =>{
        console.log(url)
        const data = await pokemonData.get(url)
        console.log(data)
    dispatch( setPokemonsData({ pokemonsData:JSON.stringify(data)	 }) ); 
}}