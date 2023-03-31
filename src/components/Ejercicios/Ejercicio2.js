import React, { useState } from 'react';
import { Grid, TextField, Button, Modal, Typography } from '@mui/material';
import './Ejercicios.css'
import Box from '@mui/material/Box';
import diagrama from '../../img/diagramas/ejercicio2.png'

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


export default function Ejercicio2() {
    // Crear un programa en JavaScript que realice lo siguiente:

    // Input

    // Solicitar al usuario por input o prompt la temperatura en grados Celsius.
    // Output

    // Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Farenheit.
    // Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Kelvin.

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleInputChange = (event) => {
        const { value } = event.target;
        setCelsius(value);
        setFahrenheit(((value * 9 / 5) + 32).toFixed(2));
        setKelvin((parseFloat(value) + 273.15).toFixed(2));
    }


    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 2
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
                        Ingresa los grados en Celsius
                    </Typography>
                    <TextField
                        label="Celsius"
                        variant="outlined"
                        type="number"
                        value={celsius}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "30px", paddingBottom: "30px" }}>
                <Grid item xs={8} display="flex" direction={'column'} justifyContent="center" alignItems="center" className='respuestas'>
                    <Typography variant="h4" component="h2" sx={{ color: "white", marginBottom: "15px", fontFamily: 'VT323' }}>
                        La conversión a grados Farenheit es: {fahrenheit} °F
                    </Typography>
                    <Typography variant="h4" component="h2" sx={{ color: "white", fontFamily: 'VT323' }}>
                        La conversión a grados Kelvin es: {kelvin} K
                    </Typography>

                </Grid>

            </Grid>

        </div>
    )
}
