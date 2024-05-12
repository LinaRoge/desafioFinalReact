import React, { useState } from "react";
import "../assets/css/App.css";
const Buscador = ({ personajes }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPersonajes = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={handleSearch}
        className="input"
      />
      <div className="card">
        {filteredPersonajes.map((personaje, id) => (
          <div key={id} className="infoCard">
            <img
              src={personaje.image}
              alt={personaje.name}
              className="imagen"
            />
            <p>{`${personaje.id} - ${personaje.name}`}</p>
          </div>
        ))}
        {filteredPersonajes.length === 0 && <p>No se encontraron resultados</p>}
      </div>
    </div>
  );
};

export default Buscador;
