import Tienda from '../assets/TiendaAbarrotes.jpg'
import LogoTienda from '../assets/LogoTienda.jpg'
import './Login.css'

function Login ({ onLogin }) {
    return (
        <div className="ContenedorLogin">
            <div className="ContenedorLogin__Imagen">
                <img src={Tienda} alt="Tienda" />
            </div>
            <div className="ContenedorLogin__Formulario">
                <form
                    className="FormularioLogin"
                    onSubmit={(event) => {
                        event.preventDefault()
                        onLogin()
                    }}
                >
                    <img className="FormularioLogin__Logo" src={LogoTienda} alt="Logo de Tiendas 4B" />
                    <div className="FormularioLogin__Encabezado">
                        <span className="FormularioLogin__Etiqueta">BIENVENIDO</span>
                        <h2>Inicia sesión</h2>
                        <p>Ingresa tus datos para continuar.</p>
                    </div>
                    <div className="FormularioLogin__Campo">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            id="usuario"
                            name="usuario"
                            type="text"
                            placeholder="Tu usuario"
                            autoComplete="username"
                            required
                        />
                    </div>
                    <div className="FormularioLogin__Campo">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input
                            id="contrasena"
                            name="contrasena"
                            type="password"
                            placeholder="Tu contraseña"
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <button className="FormularioLogin__Boton" type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;