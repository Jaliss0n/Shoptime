import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Link, styled, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import theme from '../../../theme';
import logos from '../../../assets/img/logo.png';



const CssTextField = styled(TextField)(({  }) => ({
    '& .MuiOutlinedInput-root': {
        '&:hover, & .MuiOutlinedInput-input,': {
            color: 'white'
        },
        '& fieldset': {
        borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
            borderWidth: 4
        },
        '&.Mui-focused fieldset': {
        borderColor: 'white',
        },
    },
    '& .MuiFilledInput-input':{
        color:'white'
    }
}));

const LoginBox = styled(Box)(({}) => ({
    width: '28%', 
    display:'flex', 
    flexDirection: 'column', 
    gap: 25,
    padding: '15% 7% 0 ',
    borderTopLeftRadius: '12px',
    borderEndStartRadius: '12px',
    [theme.breakpoints.down('sm',)]:{
        display: 'none'
    }
}))

const RegisterBox = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    width: '30%',
    padding:'10% 20% 0',
    borderTopRightRadius: '12px',
    borderEndEndRadius: '12px',
    [theme.breakpoints.down('sm')]:{
        width: '100%',
        margin: '10% 0 10%',
        padding: '10% 7% 10%',
        borderEndStartRadius: '12px',
        borderTopLeftRadius: '12px',
    }
}))

export default function Register() {
  return (
    <Box bgcolor='#be95c4' sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '94vh',
        padding: '3vh'
    }}>
        
        <LoginBox bgcolor='#231942'>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0 0 4%'
            }}>
                <img src={logos} width='200px'/>

            </Box>
   

            <Typography color='white' align='center' variant='h4'>
                Bem vindo de volta!!
            </Typography>
            <Typography color='white' align= 'center' variant='p'>
                Para se manter conectado com a gente
            </Typography> 
            <Typography  color='white' align= 'center' variant='p'>
                por favor, realize o login clicando no botão abaixo.
            </Typography>

            <Button variant='outlined' color='secondary' sx={{color: 'white'}}>
                Vamos lá
            </Button>
        </LoginBox>

        <RegisterBox bgcolor= '#9f86c0'>

            <Box sx={{
                display: 'none',
                [theme.breakpoints.down('sm')]:{
                    display:'flex',
                    justifyContent: 'center'
                }
            }}>
                <img src={logos} width='200px'/>
            </Box>
            
            <Typography color='white' align='center' variant='h3' sx={{
                [theme.breakpoints.down('sm')]:{
                    display: 'none'
                }
            }}>
                Crie sua Conta
            </Typography>

            <CssTextField 
                id="outlined-basic" 
                label={
                    <Box sx={{ display: 'flex', alignContent: 'center', gap: 1}}>
                        <AccountCircleIcon sx={{color: '#DCDCDC'}}/>
                        <Typography variant='p' sx={{color: '#DCDCDC'}}>
                            Nome
                        </Typography>
                    </Box>
                } 
                variant="outlined"
            />

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

            <Button  variant='contained'>
                Cadastre-se
            </Button>
            
            <Typography color='white'>
                Caso ja possua um login, clique <Link sx={{textDecoration: 'none', color: '#231942'}}>aqui.</Link>
            </Typography>

        </RegisterBox>
    </Box>
  );
}