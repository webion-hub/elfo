import { Label } from '@mui/icons-material';
import { Button, InputLabel, Stack, TextField, Typography } from '@mui/material';

export default function Form() {
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
        <TextField
          variant="outlined"
          size='small'
          label="Nome">
        </TextField>
        <br />
        <TextField
          variant="outlined"
          size="small"
          label="Email"
        /><br />
        <TextField
          multiline
          minRows={10}
          variant="outlined"
          label="Messaggio"
        />
        <Button
          size='small'
          variant='contained'
          sx={{
            marginTop: 3,
            transition: "0.3s",
            "&:hover":
            {
              backgroundColor: 'blue',
              boxShadow: theme => ({
                xs: 'none',
                lg: theme.shadows[10]
              })
            }
          }}
        >
          Invia
        </Button>
      </Stack>
    </>



  );
}