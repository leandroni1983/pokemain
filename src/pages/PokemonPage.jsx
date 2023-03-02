import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getPokemons, getDataPokemons } from '../store/slices/pokemons';
import { Button, Divider, Grid } from '@mui/material';
import PokeCardV2 from '../components/PokeCardV2';

const PokemonPage = () => {


    const [isLoad, setIsLoad] = useState(true)

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page, pokemonsData = [] } = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getDataPokemons(pokemons))
    }, [pokemons]);

    useEffect(() => {
        dispatch(getPokemons());
        setIsLoad(false)
    }, [])

    return (

        <div>
            <h1>Pokemons</h1>
            <Grid container>
                {isLoad
                    ? <h1>cargando</h1>
                    : pokemonsData.map(poke =>
                        <PokeCardV2 pokemon={poke} />
                    )}
            </Grid>

            <Grid container justifyContent={'space-around'} sx={{ mt: 2 }}>
                <Button
                    color='secondary'
                    variant='contained'
                    disabled={isLoading || page == 1}
                    onClick={() => dispatch(getPokemons(page - 2))}
                >
                    previous Page
                </Button>
                <Button
                    color='secondary'
                    variant='contained'
                    disabled={isLoading}
                    onClick={() => dispatch(getPokemons(page))}
                >
                    Next Page
                </Button>
            </Grid>
        </div>
    )
}

export default PokemonPage
