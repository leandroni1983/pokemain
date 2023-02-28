import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counter/CounterSlice'


const CounterPage = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <Grid container alignContent={'center'} justifyContent={'space-evenly'} sx={{ m: 1 }}>

            <Button
                color='secondary'
                variant='contained'
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </Button>
            <Typography fontSize={'2rem'} fontFamily={'Mynerve'}>{count}</Typography>
            <Button
                color='secondary'
                variant='contained'
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </Button>
        </Grid>

    )
}

export default CounterPage