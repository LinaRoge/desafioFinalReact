import React, { useState, useEffect } from "react";
import "../assets/css/App.css";
const MiApi = () => {
  const [personajeApi, setPersonajeApi] = useState([]);

  const traerPersonajes = async () => {
    const URL = "https://rickandmortyapi.com/api/character";
    try {
      const data = await fetch(URL);
      const result = await data.json();
      const personajes = result.results;
      setPersonajeApi(personajes);
    } catch (error) {
      console.log("No trae los datos");
    }
  };

  useEffect(() => {
    traerPersonajes();
  }, []);

  return (
    <div>
      <div className="card">
        {personajeApi.map((personaje, id) => (
          <div key={id} className="infoCard">
            <img
              src={personaje.image}
              alt={personaje.name}
              className="imagen"
            />
            <p>{`${personaje.id} - ${personaje.name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
