import React, { useState } from 'react';
import { Grid, TextField, Button, Modal, Typography } from '@mui/material';
import './Ejercicios.css'


export default function Ejercicio1() {
    // Crear un programa en JavaScript que realice lo siguiente:

    // Input

    // Solicitar al usuario por input o prompt la temperatura en grados Celcius.
    // Output

    // Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Farenheit.
    // Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Kelvin.



    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 2
                    </h1>
                    
                </Grid>
            </Grid>

            <Grid container className='twhite' display="flex" direction="column" justifyContent="center" alignItems="center" sx={{marginTop: "5px"}}>
                <Grid className='fondos-ejercicios' item xs={8} display="flex" direction="column" justifyContent="center" alignItems="center">
                    
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "30px", paddingBottom: "30px"}}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'> 

                </Grid>
            </Grid>

        </div>
    )
}
