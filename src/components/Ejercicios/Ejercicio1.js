import React, { useState } from 'react';
import { Grid, TextField, Button, Modal, Typography } from '@mui/material';
import './Ejercicios.css'


export default function Ejercicio1() {
    // Crear un programa en JavaScript que realice lo siguiente:

    // Input

    // Solicitar por prompt tres datos y guardarlos en sus respectivas variables.
    // Output

    // Mostrar los números por consola o DOM ordenados de mayor a menor, y de menor a mayor.
    // Mostrar un mensaje en consola o por el DOM si los números son iguales.

    const [numeros, setNumeros] = useState(['', '', '']);
    const [mayorMenor, setMayorMenor] = useState([]);
    const [menorMayor, setMenorMayor] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleCerrarModal = () => {
        setMostrarModal(false);
    };

    const handleNumChange = (event, index) => {
        const newNumeros = [...numeros];
        newNumeros[index] = event.target.value;
        setNumeros(newNumeros);
    };

    const ordenarMayorMenor = () => {
        const numerosOrdenados = [...numeros].sort((a, b) => b - a);
        setMayorMenor(numerosOrdenados);

        if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
            setMostrarModal(true);
        } else {
            setMenorMayor(numerosOrdenados);
        }
    };

    const ordenarMenorMayor = () => {
        const numerosOrdenados = [...numeros].sort((a, b) => a - b);
        setMenorMayor(numerosOrdenados);
    };

    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12}>
                    <Modal open={mostrarModal} onClose={handleCerrarModal} sx={{width: 400 }}>
                        <div  display="flex" justifyContent="center" alignItems="center" style={{ backgroundColor: 'white', padding: '2rem' }}>
                            <Typography variant="h4">¡Los números son iguales!</Typography>
                            <Button variant="contained" color="primary" onClick={handleCerrarModal}>
                                Cerrar
                            </Button>
                        </div>
                    </Modal>    
                </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 1
                    </h1>
                    
                </Grid>
            </Grid>

            <Grid container className='twhite' display="flex" direction="column" justifyContent="center" alignItems="center" sx={{marginTop: "5px"}}>
                <Grid className='fondos-ejercicios' item xs={8} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <>
                        <TextField
                            label="Número 1"
                            value={numeros[0]}
                            onChange={(event) => handleNumChange(event, 0)}
                            sx={{
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}
                        />
                        <TextField
                            label="Número 2"
                            value={numeros[1]}
                            onChange={(event) => handleNumChange(event, 1)}
                            sx={{
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}
                        />
                        <TextField
                            label="Número 3"
                            value={numeros[2]}
                            onChange={(event) => handleNumChange(event, 2)}
                            sx={{
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}
                        />
                    </>
                </Grid>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "25px"}}> 
                    <div>
                        <Button variant="contained" color="primary" onClick={ordenarMayorMenor} sx={{marginRight: "30px"}}>
                            Ordenar de mayor a menor
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={ordenarMenorMayor} sx={{marginLeft: "30px"}}>
                            Ordenar de menor a mayor
                        </Button>
                    </div>
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "30px", paddingBottom: "30px"}}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'> 

                    <p className='twhite'>Los numeros ordenados son:                 
                        {menorMayor.map((num) => (
                            <p className='twhite' key={num}>{num}</p>
                        ))}
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}
