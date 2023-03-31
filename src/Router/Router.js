import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Landing from "../components/Landing/Landing"
import Ejercicio1 from "../components/Ejercicios/Ejercicio1"
import Ejercicio2 from "../components/Ejercicios/Ejercicio2"
import Ejercicio3 from "../components/Ejercicios/Ejercicio3"
import Ejercicio4 from "../components/Ejercicios/Ejercicio4"
import Ejercicio5 from "../components/Ejercicios/Ejercicio5"
import Ejercicio6 from "../components/Ejercicios/Ejercicio6"
import Ejercicio7 from "../components/Ejercicios/Ejercicio7"
import Ejercicio8 from "../components/Ejercicios/Ejercicio8"
import Ejercicio9 from "../components/Ejercicios/Ejercicio9"
import Ejercicio10 from "../components/Ejercicios/Ejercicio10"



const Router = () => {

    return (
        <BrowserRouter>
            <ResponsiveAppBar />

            <Routes className="routes">
                <Route path="/" element={ <Landing />} />
                <Route path="/ejercicio1" element={ <Ejercicio1 />} />
                <Route path="/ejercicio2" element={ <Ejercicio2 />} />
                <Route path="/ejercicio3" element={ <Ejercicio3 />} />
                <Route path="/ejercicio4" element={ <Ejercicio4 />} />
                <Route path="/ejercicio5" element={ <Ejercicio5 />} />
                <Route path="/ejercicio6" element={ <Ejercicio6 />} />
                <Route path="/ejercicio7" element={ <Ejercicio7 />} />
                <Route path="/ejercicio8" element={ <Ejercicio8 />} />
                <Route path="/ejercicio9" element={ <Ejercicio9 />} />
                <Route path="/ejercicio10" element={ <Ejercicio10 />} />
                <Route path="*" element={ <Navigate to={"/"}/> }/>
            </Routes>  
                
        </BrowserRouter>
    )
}

export default Router