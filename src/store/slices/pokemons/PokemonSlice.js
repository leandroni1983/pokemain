import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        pokemonsData: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
       setPokemonsData:(state,action)=>{
        state.isLoading = false,
        state.pokemonsData =action.payload.pokemonsData
       },
}});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, setPokemonsData } = pokemonSlice.actions;