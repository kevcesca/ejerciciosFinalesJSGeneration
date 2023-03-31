import React from 'react';
import { Grid, Typography, Button, Modal } from '@mui/material';
import './Ejercicios.css'
import Box from '@mui/material/Box';
import diagrama from '../../img/diagramas/ejercicio6.png'

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


export default function Ejercicio6() {
    // Crear un programa en JavaScript que realice lo siguiente:

    // Input

    // Solicitar al usuario por input o prompt la temperatura en grados Celcius.
    // Output

    // Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Farenheit.
    // Imprimir por consola o DOM la temperatura ingresada convertida de grados Celsius a grados Kelvin.
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className='contenedor-ejercicios'>

            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className="titles twhite">
                        Ejercicio 6
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
                <Grid item xs={12} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <Typography variant="h4" component="h1" sx={{ color: "white", marginBottom: "15px", fontFamily: 'VT323' }}>
                        Invertir cadena de caracteres
                    </Typography>
                    <iframe
                        src="https://www.jdoodle.com/iembed/v0/G2U"
                        title="JDoodle Online Compiler"
                        width="300%"
                        height="700px"
                        className='java-frame'
                    />

                </Grid>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: "30px", paddingBottom: "30px" }}>
                <Grid item xs={8} display="flex" justifyContent="center" alignItems="center" className='respuestas'>
                    <p className='twhite'>
                        Para ejecutar el código por favor activa el switch de "Interactive Mode"
                    </p>
                </Grid>
            </Grid>

        </div>
    )
}
