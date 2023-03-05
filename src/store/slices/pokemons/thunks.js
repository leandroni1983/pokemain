import { pokemonApi,pokemonData } from '../../../api/ApiPokemon';
import { setPokemons,  startLoadingPokemons, setPokemonsData} from './pokemonSlice';

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
      
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}

export const getDataPokemons = (pokemons) =>{
    return async(dispatch,getState )=>{
        dispatch(startLoadingPokemons());
        const responses = await Promise.all(
            pokemons.map(({ name }) => pokemonData(name))
        );
        const data = responses.map(({ data }) => data);
        
        dispatch(setPokemonsData({pokemonsData:data}))
    }
}