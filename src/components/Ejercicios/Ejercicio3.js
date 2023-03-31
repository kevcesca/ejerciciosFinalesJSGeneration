import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import './Ejercicios.css'


export default function Ejercicio3() {

    // Crear un programa en JavaScript que realice lo siguiente:

    // Input

    // Solicitar por prompt o input un número.
    // Output

    // Imprimir por consola o DOM el factorial del número recibido.

    // Aquí es donde mantendremos el estado del número ingresado y del resultado del factorial
    const [number, setNumber] = useState('');
    const [factorial, setFactorial] = useState('');

    // Función para calcular el factorial del número ingresado
    const calculateFactorial = () => {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        setFactorial(result);
    };

    // Función para manejar cambios en el TextField
    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };


    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 3
                    </h1>

                </Grid>
            </Grid>

            <Grid container className='twhite' display="flex" direction="column" justifyContent="center" alignItems="center" sx={{ marginTop: "5px" }}>
                <Grid className='fondos-ejercicios' item xs={8} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h4" component="h1" sx={{ color: "black", marginBottom: "15px", fontFamily: 'VT323' }}>
                        Ingresa un numero
                    </Typography>
                    <TextField
                        label="Número"
                        value={number}
                        onChange={handleNumberChange}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "25px"}}> 
                    <Button variant="contained" color="primary" onClick={calculateFactorial}>Calcular factorial</Button>
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "30px", paddingBottom: "30px" }}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'>
                    <p className='twhite'>Factorial: {factorial}</p>
                </Grid>
            </Grid>

        </div>
    )
}
