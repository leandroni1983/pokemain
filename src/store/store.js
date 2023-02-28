import { configureStore } from '@reduxjs/toolkit'
import { counterSlice }  from './slices/counter/CounterSlice'
import { pokemonSlice } from './slices/pokemons/PokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
})