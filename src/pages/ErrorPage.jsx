import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <Grid container direction={'column'}
                sx={{ color: 'tercero.main', backgroundColor: 'primary.main' }}
                justifyContent={'center'}
                alignItems={'center'}>

                <Typography variant='h3'>Oops!</Typography>
                <Typography variant='span'>Sorry, an unexpected error has occurred.</Typography>
                <Typography variant='span'>{error.statusText || error.message}.</Typography>



            </Grid>
        </>
    )
}

export default ErrorPage
