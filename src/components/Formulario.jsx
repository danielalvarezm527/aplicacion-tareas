import React, { useState } from "react";
import "../css/Formulario.css";
import {v4 as uuidv4} from "uuid";

function Formulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
  };

  return(
    <form 
      className="formulario"
      onSubmit={manejarEnvio}>
      <input
        className="formulario-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="formulario-boton">
        Agregar tarea
      </button>
    </form>
  );
}

export default Formulario;