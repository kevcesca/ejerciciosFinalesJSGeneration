import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Modal } from '@mui/material';
import './Ejercicios.css'
import Box from '@mui/material/Box';
import diagrama from '../../img/diagramas/ejercicio4.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function Ejercicio4() {
    // Crear un programa en JavaScript que realice lo siguiente:

    // Input

    // Solicitar por prompt o input un número.
    // Output

    // Imprimir por consola o DOM la serie de fibonacci dependiendo el número recibido.


    const [number, setNumber] = useState('');
    const [fibonacciSeries, setFibonacciSeries] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const calculateFibonacci = (num) => {
        if (!num) {
            return [];
        }
        const series = [0, 1];
        for (let i = 2; i < num; i++) {
            series.push(series[i - 2] + series[i - 1]);
        }
        return series;
    };

    const handleCalculate = () => {
        const fibonacciSeries = calculateFibonacci(parseInt(number));
        setFibonacciSeries(fibonacciSeries);
    };


    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 4
                    </h1>

                </Grid>
            </Grid>

            {/* Modal para diagramas */}
            <Grid container >
                <Grid item display="flex" justifyContent="center" alignItems="center" xs={12}>
                    <Button variant="contained" color="primary" onClick={handleOpen}>Diagrama de flujo</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <img className='diagramas' src={diagrama} alt="Diagrama de flujo"></img>
                        </Box>
                    </Modal>
                </Grid>
            </Grid>

            <Grid container className='twhite' display="flex" direction="column" justifyContent="center" alignItems="center" sx={{ marginTop: "35px" }}>
                <Grid className='fondos-ejercicios' item xs={8} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h4" component="h1" sx={{ color: "black", marginBottom: "15px", fontFamily: 'VT323' }}>
                        Calcular serie Fibonacci
                    </Typography>
                    <TextField
                        label="Ingrese un número"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                        type="number"
                    />
                </Grid>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "25px" }}>
                    <Button variant="contained" color="primary" onClick={handleCalculate}>
                        Calcular
                    </Button>
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "30px", paddingBottom: "30px" }}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'>
                    <p className='twhite'>
                        Serie de Fibonacci: {fibonacciSeries.join(', ')}
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}
