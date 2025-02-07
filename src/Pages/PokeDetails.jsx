import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PokeDetails.css";

function PokeDetails() {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data))
      .catch((error) => console.error("Errore nel fetch dei dettagli:", error));
  }, [pokemonName]);

  if (!pokemonDetails) return <p>Caricamento...</p>;

  return (
    <div className="pokemon-detail">
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p><strong>Tipo: </strong>{pokemonDetails.types.map(type => type.type.name).join(", ")}</p>
      <p><strong>Altezza: </strong>{pokemonDetails.height / 10} m</p>
      <p><strong>Peso: </strong>{pokemonDetails.weight / 10} kg</p>
      <h2>Statistiche: </h2>
      <ul>
        {pokemonDetails.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <Link to="/">Torna alla lista</Link>
    </div>
  );
}

export default PokeDetails;
