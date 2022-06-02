import { Box, IconButton, Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Home from "../home/home";
import StyledTableCell from "../../components/StyledTableCell";
import StyledTableRow from "../../components/StyledTableRow";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Produtos() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => setOpen(true);

    const handleClose = () => setOpen(false);


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


    return (
        <div >
            <Home />
            <Box bgcolor={'#9f86c0'} sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '240px',
                height: '100vh',
                width: '100% - 240',
                [theme.breakpoints.down('sm')]: {
                    paddingLeft: '0',
                    height: '130vh'

                }
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '13%',
                    [theme.breakpoints.down('sm')]:{
                        marginTop:'30%',

                    }
                }}>

                    <div style={{ width: '90%', }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Id </StyledTableCell>
                                        <StyledTableCell align="right">Produto</StyledTableCell>
                                        <StyledTableCell align="right">Estoque</StyledTableCell>
                                        <StyledTableCell align="right">Valor Unitario</StyledTableCell>
                                        <StyledTableCell align="right">Fornecedor</StyledTableCell>
                                        <StyledTableCell align="right">Ações</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.cadastra_id}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <IconButton color="error" >
                                                    <DeleteForeverOutlinedIcon onClick={handleClickOpen} />
                                                </IconButton>
                                                <IconButton color='inherit'>
                                                    <Link to={`/gerencia/EDITA/${row.cadastra_id}/`}>
                                                        <EditOutlinedIcon color="secondary" />
                                                    </Link>
                                                </IconButton>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <DialogTitle id="alert-dialog-title">
                                                        {"Tem certeza que deseja DELETAR esté usuario?"}
                                                    </DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            Assim que está operacão for confirmada, a mesma não poderá ser revertida.
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>

                                                        <Button color="secondary" onClick={handleClose}>Cancelar</Button>

                                                        <Link to={`/gerencia/DELETE/${row.cadastra_id}/`}>
                                                            <Button color="primary"  variant='contained' onClick={handleClose} autoFocus>
                                                                Deletar
                                                            </Button>
                                                        </Link>
                                                    </DialogActions>
                                                </Dialog>

                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
            </Box>
        </div>
    )
}