import axios from 'axios';
import { pokemonApi, } from '../../../api/ApiPokemon';
import { setPokemons,  startLoadingPokemons, setPokemonsData} from './pokemonSlice';

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
      
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}

export const getDataPokemons = (pokemons) =>{
    let arr = []
    return async(dispatch,getState )=>{
        dispatch(startLoadingPokemons());
        const responses = await Promise.all(
            pokemons.map(({ url }) => axios.get(url))
        );
        responses.map(({ data }) => arr.push(data));
        
        dispatch(setPokemonsData({pokemonsData:arr}))
    }
}