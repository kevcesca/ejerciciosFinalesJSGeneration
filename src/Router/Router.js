import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Landing from "../components/Landing/Landing"
import Ejercicio1 from "../components/Ejercicios/Ejercicio1"
import Ejercicio2 from "../components/Ejercicios/Ejercicio2"


const Router = () => {

    return (
        <BrowserRouter>
            <ResponsiveAppBar />

            <Routes className="routes">
                <Route path="/" element={ <Landing />} />
                <Route path="/ejercicio1" element={ <Ejercicio1 />} />
                <Route path="/ejercicio2" element={ <Ejercicio2 />} />
                <Route path="*" element={ <Navigate to={"/"}/> }/>
            </Routes>  
                
        </BrowserRouter>
    )
}

export default Router