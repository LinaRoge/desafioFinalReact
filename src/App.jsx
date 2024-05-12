import React, { useState, useEffect } from "react";
import MiApi from "./componets/MiApi";
import Buscador from "./componets/Buscador";

const App = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const traerPersonajes = async () => {
      const URL = "https://rickandmortyapi.com/api/character";
      try {
        const data = await fetch(URL);
        const result = await data.json();
        const personajes = result.results;
        setPersonajes(personajes);
      } catch (error) {
        console.log("No trae los datos");
      }
    };
    traerPersonajes();
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <Buscador personajes={personajes} />
      {/*<MiApi/>*/}
    </div>
  );
};

export default App;
