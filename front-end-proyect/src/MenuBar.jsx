import { Link } from "react-router-dom";

export function MenuBar() {
    return(
        <div className="Main-Menu">
            <button className="Main-Menu-Button">
                <Link to="/">Inicio</Link>
            </button>
            <div className="Main-Menu-Separator"></div>
            <button className="Main-Menu-Button">
                <Link to="/eventos">Eventos</Link>
            </button>
            <div className="Main-Menu-Separator"></div>
            <button className="Main-Menu-Button">
                <Link to="/contacto">Contacto</Link>
            </button>
            <div className="Main-Menu-Separator"></div>
            <button className="Main-Menu-Button">
                <Link to="/nosotros">Nosotros</Link>
            </button>
            <div className="Main-Menu-Separator"></div>
            <button className="Main-Menu-Button">
                <Link to="/perfil">Perfil</Link>
            </button>
            <div className="Main-Menu-Separator"></div>
            <div className="Main-Menu-Login">
                <button className="Main-Menu-Login-Button">
                    <Link to="/login">Ingresar</Link>
                </button>
                <button className="Main-Menu-Login-Button">
                <Link to="/registro">Registrarse</Link>
                </button>
            </div>
            
        </div>
    )
}