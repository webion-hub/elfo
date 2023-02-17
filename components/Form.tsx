import { FormHelperText, Input, InputLabel, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Br from './Br';

export default function Form()
{
    return (
        <>
            <FormControl>
                <InputLabel>Email address</InputLabel>
                <Input id="email" />
            </FormControl>
            <Br/>
            <Br/>
            <FormControl>
                <InputLabel>Nome</InputLabel>
                <Input id="name" />
            </FormControl>
        </>
        
        

    );
}