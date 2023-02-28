import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokemonsData } from '../store/slices/pokemons';
const PokemonPage = () => {

    const [pokeData, setPokeData] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);


    useEffect(() => {
        dispatch(getPokemons());
    }, [])


    useEffect(() => {
        let arr = []
        for (const pokemon of pokemons) {
            axios.get(pokemon.url)
                .then(response => arr.push(response.data))
                .catch(error => console.log(error))
        }
        setPokeData(arr)
        setIsLoad(false)
    }, [pokemons])



    return (

        <div>
            <h1>Pokemons</h1>
            <ul>
                {isLoad
                    ? <h1>cargando</h1>
                    : pokeData.map(poke => <li>{poke}</li>)
                }
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>
        </div>
    )
}

export default PokemonPage
