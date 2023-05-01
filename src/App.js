import './App.css';
// importando imagen
import freecodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
            <img 
                className='freecodecamp-logo' 
                src={freecodeCampLogo}  // nuevo modo de enlazar una imagen
                alt='Logo de freeCodeCamp' 
            />
        </div>
        <div className='contenedor-principal'>
            {/* aquí crearemos nuestros componentes: el Contador y los Botomes */}
            <Boton 
                texto='Clic'
                esBotonDeClic={true}
                manejarClic={} />
            <Boton 
                texto='Reiniciar'
                esBotonDeClic={false}
                manejarClic={} />
        </div>
    </div>
  );
}

export default App;
