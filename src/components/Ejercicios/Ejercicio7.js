import React from 'react';
import { Grid, Typography } from '@mui/material';
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
                        Ejercicio 7
                    </h1>
                    
                </Grid>
            </Grid>

            <Grid container className='twhite' display="flex" direction="column" justifyContent="center" alignItems="center" sx={{marginTop: "5px"}}>
                <Grid item xs={12} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h4" component="h1" sx={{ color: "white", marginBottom: "15px", fontFamily: 'VT323' }}>
                        Calcular los minutos que faltan para el fin de semana
                    </Typography>
                    <iframe
                        src="https://www.jdoodle.com/iembed/v0/G30"
                        title="JDoodle Online Compiler"
                        width="1000px"
                        height="700px"
                        className='java-frame'
                    />
                    
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "30px", paddingBottom: "30px"}}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'> 
                    <p className='twhite'>
                        Para ejecutar el código por favor activa el switch de "Interactive Mode"
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}
