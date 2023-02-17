import { Box, Button, FormHelperText, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Br from './Br';

export default function Form()
{
    return (
        <>
            <Stack
                component="form"
                sx={{
                   width: '100%'
                }}
                noValidate
                autoComplete="off"
                flexDirection={'column'}
                margin="auto"
                >
                <Typography variant="subtitle1" component="p">Nome: </Typography><TextField variant="outlined"  size='small'/>
                <Typography variant="subtitle1" component="p">Email: </Typography><TextField variant="outlined" size="small"/>
                <Typography variant="subtitle1" component="p">Messaggio: </Typography><TextField multiline minRows={10} variant="outlined"/>
                <Button size='small' variant='contained'>Invia</Button>
            </Stack>
        </>
        
        

    );
}