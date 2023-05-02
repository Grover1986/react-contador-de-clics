import './App.css';
// importando imagen
import freecodeCampLogo from './images/freecodecamp-logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react'; //es necesario importar el Hook useState

function App() {
    // Para actualizar el contador es necesario manejar los estados, así q aquí manejaremos el Hook useState(), q es una función especial y poderosa en React
    
    //👇 aqui declaramos un arreglo con 2 elementos importantes, el 1ro es el valor q queremos usar como el estado, este se va a guardar y se va actualizar
    //👇 el 2do es una función q nos va a permitir actualizar el valor de numClics
    //👇 y a estos elementos le asignamos el valor retornado x useState q entre () le pasaremos el valor inicial de nuestro estado
    const [numClics, setNumClics] = useState(0) // 👈 este valor 0 será el valor inicial de numClics

    const manejarClic = () => {
        setNumClics(numClics + 1)
    }

    const reiniciarContador = () => {
        setNumClics(0)
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
                numClics={numClics} />
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
