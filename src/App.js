import './App.css';
// importando imagen
import freecodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

    const manejarClic = () => {
        console.log('Clic')
    }

    const reiniciarContador = () => {
        console.log('Reiniciar')
    }

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
                <Contador 
                numClics='5' />
                <Boton 
                    texto='Clic'
                    esBotonDeClic={true}
                    manejarClic={manejarClic} />
                <Boton 
                    texto='Reiniciar'
                    esBotonDeClic={false}
                    manejarClic={reiniciarContador} />
            </div>
        </div>
    );
}

export default App;
