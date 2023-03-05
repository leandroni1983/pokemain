import { configureStore } from '@reduxjs/toolkit'
import { counterSlice }  from './slices/counter/CounterSlice'
import { pokemonSlice } from './slices/pokemons/PokemonSlice'
import { pokeSlice } from './slices/pokemons/PokeSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    pokemon: pokeSlice.reducer
  },
})