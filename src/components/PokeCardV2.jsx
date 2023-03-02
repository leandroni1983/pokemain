import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';

import { StyledTypography } from './styled';

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
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt={pokemon.species.name} src={pokemon.sprites.other.home.front_default} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <StyledTypography gutterBottom variant="subtitle1" component="div">
                                Nombre: {pokemon.species.name}
                            </StyledTypography>
                            <StyledTypography variant="body2" gutterBottom>
                                {pokemon.abilities.map(({ ability }) => <p>{ability.name}</p>)}
                            </StyledTypography>
                            <StyledTypography variant="body2">
                                ID: {pokemon.id}
                            </StyledTypography>
                        </Grid>

                    </Grid>
                    <Grid item justifyContent={'space-between'} width={"40%"}
                        display={'flex'}
                        direction={'column'}>
                        <StyledTypography
                            variant="subtitle1"
                            display={'flex'}
                            justifyContent={'flex-end'}>
                            {pokemon.types.map(({ type }) => <> {type.name}</>)}
                        </StyledTypography>
                        <Button
                            color='tercero'
                            variant='contained'
                            sx={{ cursor: 'pointer' }}>
                            More Info
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default PokeCardV2