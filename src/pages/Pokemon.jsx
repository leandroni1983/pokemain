import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pdata } from '../api/ApiPokemon'
const Pokemon = () => {
    const { name } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const probando = async () => {
            const info = await pdata(name)
            setData(info.data)
        }
        probando()
    }, [name]);
    const { back_default } = data.sprites
    console.log(back_default)
    return (
        <div>
            <h1>{name}</h1>
            <img src={back_default} alt="" />
        </div>
    )
}

export default Pokemon
