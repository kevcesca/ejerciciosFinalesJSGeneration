import {Grid } from '@mui/material'
import React from 'react'
import './Landing.css'
import NewCard from '../NewCard/NewCard.js'
import elohim from '../../img/elohim.png'
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
            
                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Link to="/ejercicio1">
                        <NewCard 
                            img={elohim} 
                            talt="Elohim"
                            description="Acomodar numeros de mayor a menor y de menor a mayor" 
                            title="Ejercicio 1">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Link to="/ejercicio2">
                        <NewCard 
                            img={elohim} 
                            talt="Elohim"
                            description="Convertir grados Celsius a Farenheit y Kelvin" 
                            title="Ejercicio 2">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Link to="/ejercicio1">
                        <NewCard 
                            img={elohim} 
                            talt="Elohim"
                            description="Cantante fav" 
                            title="Elohim">
                        </NewCard>
                    </Link>
                </Grid>

                <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
                    <Link to="/ejercicio1">
                        <NewCard 
                            img={elohim} 
                            talt="Elohim"
                            description="Cantante fav" 
                            title="Elohim">
                        </NewCard>
                    </Link>
                </Grid>
            

            </Grid>
        </div>
    )
}
