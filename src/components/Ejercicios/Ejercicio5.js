import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import './Ejercicios.css'


export default function Ejercicio1() {
    // Crear un programa en JavaScript que realice lo siguiente:

    // Pedir al usuario por prompt o input un número del 1 al 100 para adivinar un número secreto.
    
    // Input
    
    // El dato ingresado por el usuario (número del 1 al 100).
    // Output
    
    // Imprimir por consola o DOM un mensaje diciendo "Ups, el número secreto es incorrecto, vuelve a intentarlo." y volver a solicitarle que ingrese un número, en caso de no adivinar el número secreto.
    // Imprimir por consola o DOM un mensaje diciendo "Felicidades, adivinaste el número secreto." en caso de adivinar el número secreto.
    // Imprimr por consola o DOM la lista de númros introducidos antes de adivinar el número secreto.

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [userGuess, setUserGuess] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    const handleGuess = () => {
        const guess = parseInt(userGuess);
        console.log("La respuesta es " + randomNumber);
        if (guess === randomNumber) {
            setResultMessage('¡Adivinaste!');
        } else {
            setResultMessage('Fallaste.');
        }
    };

    const handleReset = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
        
        setUserGuess('');
        setResultMessage('');
    };

    

    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 5
                    </h1>

                </Grid>
            </Grid>

            <Grid container className='twhite' display="flex" direction="column" justifyContent="center" alignItems="center" sx={{ marginTop: "5px" }}>
                <Grid className='fondos-ejercicios' item xs={8} display="flex" justifyContent="center" alignItems="center" sx={{flexDirection:"column"}}>
                    <Typography variant="h4" component="h1" sx={{ color: "black", marginBottom: "15px", fontFamily: 'VT323' }}>
                        Estoy pensando en un número...
                    </Typography>
                    <TextField
                        label="Adivina el número"
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 100 } }}
                        sx={{width: "100%"}}
                    />
                    <Typography variant="h6" component="h6" sx={{ color: "black", marginBottom: "15px", fontFamily: 'VT323' }}>
                        Presiona F12 para saber el resultado
                    </Typography>
                </Grid>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "25px"}}> 
                    <Button variant="contained" color="primary" onClick={handleGuess} sx={{marginRight:"20px"}}>
                        Adivinar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleReset} sx={{marginLeft:"20px"}}>
                        Reiniciar
                    </Button>
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "30px", paddingBottom: "30px" }}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'>
                    <p className='twhite'>
                        {resultMessage}
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}
