import './App.css';
import rutaLogo from './imgs/logo.png'
import Logo from './components/Logo';
import Tarea from './components/Tarea';
import Formulario from './components/Formulario';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <Logo 
          ruta={rutaLogo}
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
