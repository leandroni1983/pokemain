import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import { StyledTypography } from './styled';
import { Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import { Link } from '@mui/material';
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
function PokeCardV2({ pokemon }) {

    return (
        <Paper
            sx={{
                p: 2,
                margin: 0.5,
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: 'secondary.main'
            }}
        >
            <Grid container spacing={2} >
                <Grid item >
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt={pokemon.species.name} src={pokemon.sprites.other.home.front_default} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction={"column"} spacing={2}>
                        <Grid item >
                            <StyledTypography  >
                                Name:  <b>{pokemon.species.name} </b>
                            </StyledTypography>
                            <StyledTypography
                            >
                                Tipo:
                                {pokemon.types.map(({ type }) => <span key={type.name}> {type.name}</span>)}
                            </StyledTypography>
                        </Grid>

                    </Grid>
                    <Grid container justifyContent={'space-between'}
                        width={"40%"}
                        direction={'column'}>
                        <StyledTypography>
                            <b>     ID: {pokemon.id}  </b>
                        </StyledTypography>

                        <Link component={RouterLink} to={`/pokemons/${pokemon.name}`} color='inherit' underline="none">
                            <Button
                                color='tercero'
                                variant='contained'
                                sx={{ cursor: 'pointer' }}>
                                <Typography>More Info</Typography>
                            </Button>

                        </Link>

                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default PokeCardV2