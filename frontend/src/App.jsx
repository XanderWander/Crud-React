import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProyectoPage } from "./pages/ProyectoPage";
import { ProyectoFormPage } from './pages/ProyectoFormPage'; //Se importa los componentes para indicar donde redireccionara la paginia
import { Navigation } from './components/Navigation'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

    <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/Proyecto" />} />
        <Route path="/proyecto" element={<ProyectoPage/>} />
        <Route path="/proyecto-create" element={<ProyectoFormPage/>} /> {/*Aqui estaran todas las rutas para poder acceder a las paginas */}
        <Route path="/proyecto/:id" element={<ProyectoFormPage/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App