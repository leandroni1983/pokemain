import { createSlice } from '@reduxjs/toolkit';

export const pokeSlice = createSlice({
            name: 'poke',
            initialState: {
            pokeData: []
        },

        reducers: {
            startLoadingPokemons: (state, /* action */ ) => {
                state.isLoading = true;
            },
            setPokemon: ( state, action ) => {
                state.isLoading = false;
                state.pokeData = action.payload.pokeData;
            },
        }
});
export const { startLoadingPokemons,setPokemon } = pokeSlice.actions;