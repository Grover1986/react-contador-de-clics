import './App.css';
// importando imagen
import freecodeCampLogo from './images/freecodecamp-logo.png'

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
    </div>
  );
}

export default App;
