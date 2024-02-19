import { Link } from 'react-router-dom' //Importamos la libreria de React Router Dom para que nos redirreccione a las diferentes paginas sin necesidad de cambiar de pagina
import "bootstrap/dist/css/bootstrap.min.css";


export function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"> 
            <Link className="nav-item nav-link" to="/proyecto">Proyectos</Link> 
            <Link className="nav-item nav-link" to="/proyecto-create">Registrar Proyecto</Link>
            {/*A traves de esta Funcion. Las etiquetas Link son las que nos permitira navegar a traves de las paginas. */}
          </div>
        </div>
      </nav>
    </div>
  )
}