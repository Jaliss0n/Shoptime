import { Box, Button, Container, Paper, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import Home from "../home/home";
import theme from "../../theme";
import CssTextField from "../../components/CssTextField";
import { useForm, Controller } from "react-hook-form";
import Bodycss from "../../components/BodyCss";
import { styled } from "@mui/system";


export default function Register_products() {

    const { control, handleSubmit } = useForm();

    const Products_Cont = styled(Container)(({}) =>({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#231942',
        borderRadius: '12px',
        marginTop: '12%',
        padding: '2%',
        width: '70%',
        gap: 40,
        [theme.breakpoints.down('sm')]:{
            width: '90%',
            marginTop: '23%'
        }
    }))


    return (
        <div>
            <Home />
            <Bodycss bgcolor='#9f86c0'>

                <Products_Cont>

                    <Typography bgcolor='#9f86c0' align="center" color='white' variant='h4' borderRadius='12px' p='6px' >Cadastrar Maquina</Typography>
                    <Box sx={{ display: 'flex',
                        gap: 6,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        width: '100%',
                        [theme.breakpoints.down('sm')]:{
                            gap:3
                        }
                    }}>

                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-around',
                            [theme.breakpoints.down('sm')]: {
                                flexDirection: 'column',
                                gap:3
                            }
                        }}>
                            <Controller
                                name='chamado'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <CssTextField
                                        onChange={onChange}
                                        value={value}
                                        id="chamado"
                                        label={<Typography color='#DCDCDC' variant="p">Chamado</Typography>}
                                        variant="outlined"
                                    />
                                )}
                            />

                            <Controller
                                name='patrimonio'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <CssTextField
                                        onChange={onChange}
                                        value={value}
                                        id="patrimonio"
                                        label={<Typography color='#DCDCDC' variant="p">Patrimonio</Typography>}
                                        variant="outlined"

                                    />
                                )}
                            />
                        </Box>

                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-around',
                            [theme.breakpoints.down('sm')]: {
                                flexDirection: 'column',
                                gap:3

                            }
                        }}>

                            <Controller
                                name='marca'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <CssTextField
                                        onChange={onChange}
                                        value={value}
                                        id="marca"
                                        label={<Typography color='#DCDCDC'  variant="p">Marca</Typography>}
                                        variant="outlined"

                                    />
                                )}
                            />

                            <Controller
                                name='setor'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <CssTextField
                                        onChange={onChange}
                                        value={value}
                                        id="setor"
                                        label={<Typography color='#DCDCDC'  variant="p">Setor</Typography>}
                                        variant="outlined"

                                    />
                                )}
                            />
                        </Box>

                        <Box sx={{ 
                            display: 'flex',
                            justifyContent: 'space-around',
                            [theme.breakpoints.down('sm')]: {
                                flexDirection: 'column',
                                gap:3

                            }
                        }}>

                            <Controller
                                name='laudo'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <CssTextField
                                        onChange={onChange}
                                        value={value}
                                        id="laudo"
                                        label={<Typography color='#DCDCDC'  variant="p">Laudo</Typography>}
                                        variant="outlined"

                                    />
                                )}
                            />

                            <Controller
                                name='data'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <CssTextField
                                        onChange={onChange}
                                        value={value}
                                        id="data"
                                        label={<Typography color='#DCDCDC'  variant="p">Data</Typography>}
                                        variant="outlined"

                                    />
                                )}
                            />
                        </Box>
                    </Box>

                    <Stack sx={{gap:2}}>
                        <Button variant= 'contained' color='secondary'>Cadastrar</Button>

                        <Button variant='outlined' color='error'>Limpar</Button>
                    </Stack>
                </Products_Cont>
            </Bodycss>
        </div>
    )
}