import {Grid } from '@mui/material'
import React from 'react'
import './Landing.css'
import NewCard from '../NewCard/NewCard.js'
// import elohim from '../../img/elohim.png'
import js from '../../img/js.png'
import jar from '../../img/java.jpg'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className='landing-container'>
            <Grid container >
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="start">
                    <h1 className='twhite titles'>Ejercicios JavaScript</h1>
                </Grid>
            </Grid>
            <Grid container>
            
                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio1" className='link-cards'>
                        <NewCard 
                            img={js} 
                            talt="JavaScript"
                            description="Acomodar numeros de mayor a menor y de menor a mayor" 
                            title="Ejercicio 1">
                            
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio2" className='link-cards'>
                        <NewCard 
                            img={js} 
                            talt="JavaScript"
                            description="Convertir grados Celsius a Farenheit y Kelvin" 
                            title="Ejercicio 2">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio3" className='link-cards'>
                        <NewCard 
                            img={js} 
                            talt="JavaScript"
                            description="Calcular el factorial" 
                            title="Ejercicio 3">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio4" className='link-cards'>
                        <NewCard 
                            img={js} 
                            talt="JavaScript"
                            description="Calcular serie Fibonacci" 
                            title="Ejercicio 4">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio5" className='link-cards'>
                        <NewCard 
                            img={js} 
                            talt="JavaScript"
                            description="Adivinar numero del 1 al 100" 
                            title="Ejercicio 5">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio6" className='link-cards'>
                        <NewCard 
                            img={jar} 
                            talt="JavaScript"
                            description="Invertir cadena de caracteres" 
                            title="Ejercicio 6">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio7" className='link-cards'>
                        <NewCard 
                            img={jar} 
                            talt="JavaScript"
                            description="Calcular minutos para el fin de semana" 
                            title="Ejercicio 7">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio8" className='link-cards'>
                        <NewCard 
                            img={jar} 
                            talt="JavaScript"
                            description="Poner los números primos al inicio" 
                            title="Ejercicio 8">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio9" className='link-cards'>
                        <NewCard 
                            img={jar} 
                            talt="JavaScript"
                            description="Diccionario Inglés - Español" 
                            title="Ejercicio 9">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio10" className='link-cards'>
                        <NewCard 
                            img={jar} 
                            talt="JavaScript"
                            description="Traduce las palabras" 
                            title="Ejercicio ">
                        </NewCard>
                    </Link>
                </Grid>

                {/* <Grid item xs={12} md={6} lg={4} display="flex" justifyContent="center" alignItems="center" sx={{marginBottom:"15px"}}>
                    <Link to="/ejercicio1">
                        <NewCard 
                            img={elohim} 
                            talt="Elohim"
                            description="Cantante fav" 
                            title="Elohim">
                        </NewCard>
                    </Link>
                </Grid> */}
            

            </Grid>
        </div>
    )
}
