import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataPokemon } from '../store/slices/pokemons'
import { useDispatch, useSelector } from 'react-redux';

const Pokemon = () => {
    const { name } = useParams()

    const dispatch = useDispatch();
    const { pokeData = [], isLoading = true } = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getDataPokemon(name))
    }, [name]);

    console.log(pokeData)
    const { abilities, sprites, types } = pokeData
    return (
        <>
            {isLoading ?
                <>
                    <h1>cargando</h1>
                </>
                : <>
                    <h1>{name}</h1>
                    <img src={sprites.front_default} alt={name} />
                    <img src={sprites.back_default} alt={name} />
                </>}

        </>
    )
}

export default Pokemon
