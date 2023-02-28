import React, { useState } from 'react'
import { styled } from '@mui/system';
import { Button, Grid } from '@mui/material';
import { useForm } from "react-hook-form";

const SearchForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    const StyledForm = styled('form')(({ theme }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    }));

    const StyledInput = styled('input')(({ theme }) => ({
        margin: theme.spacing(1),
        paddingLeft: '12px',
        height: '3.125rem',
        borderRadius: '5px',
        width: '60%',



    }));

    const StyledButton = styled(Button)(({ theme }) => ({
        marginLeft: theme.spacing(1),
        borderRadius: '5px',
        width: '20%',


    }));
    return (
        <Grid item justifyContent={'center'} alignItems={'center'} sx={{ backgroundColor: 'primary.main', borderRadius: '10px' }}>

            <StyledForm
                sx={{ flexDirection: 'row', alignItems: 'center' }}
                onSubmit={handleSubmit(onSubmit)}>
                <StyledInput

                    placeholder='Search'
                    {...register("textSearch")}
                />
                <StyledButton
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    size='large'
                    variant="outlined"
                    color='tercero'>
                    Search
                </StyledButton  >
            </StyledForm >
        </Grid>
    )
}

export default SearchForm
