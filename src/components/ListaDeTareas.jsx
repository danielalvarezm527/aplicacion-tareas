import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";

import "../css/ListaDeTareas.css";

function ListaDeTareas(){

  const [tareas, setTareas] =useState([]);

  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  return(
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="lista-de-tareas-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;