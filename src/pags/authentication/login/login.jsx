import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Link, Typography } from '@mui/material';
import CssTextField from '../../../components/CssTextField';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import { padding } from '@mui/system';
import theme from '../../../theme';


export default function Login() {
  return (

    
    <Box bgcolor='#9f86c0' sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    }}>
        <Box bgcolor='#231942' sx={{
            display:'flex',
            flexDirection: 'column',
            width: '30%',
            gap: 5,
            borderRadius: '12px',
            padding:'50px',
            margin: '10% 0',
            [theme.breakpoints.down('sm')]:{
                width: '70%',
                padding: '20% 10%',
                margin: '20% 0',
                gap: 5
            }

        }}>

            <Typography align='center' color='white' variant='h4'>
                Login
            </Typography>

            <CssTextField 
                    id="outlined-basic" 
                    label={
                        <Box sx={{ display: 'flex', alignContent: 'center', gap: 1}}>
                            <EmailIcon sx={{color: '#DCDCDC'}}/>
                            <Typography variant='p' sx={{color: '#DCDCDC'}}>
                                Email
                            </Typography>
                        </Box>
                    } 
                    variant="outlined"
            />

            <CssTextField 
                id="outlined-basic" 
                label={
                    <Box sx={{ display: 'flex', alignContent: 'center', gap: 1}}>
                        <KeyIcon sx={{color: '#DCDCDC'}}/>
                        <Typography variant='p' sx={{color: '#DCDCDC'}}>
                            Senha
                        </Typography>
                    </Box>
                }
                type='password' 
                variant="outlined"
            />

            <Button href='/home' variant='outlined' color='secondary' sx={{color: 'white'}}>Entrar</Button>

            <Typography align='center' color='white' variant='p'>
                Caso não possua um cadastro clique <Link href='/' sx={{textDecoration: 'none', color: '#9f86c0'}}>aqui.</Link>
            </Typography>
        </Box>
    </Box>
  );
}