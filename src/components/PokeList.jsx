import React from "react";
import { Link } from "react-router-dom";
import "./PokeList.css"; 

function PokeList({ pokemons }) {
    if (!pokemons || pokemons.length === 0) {
        return <p>Non ci sono Pokémon da visualizzare.</p>;
    }

    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <div key={pokemon.id} className="pokemon-card">
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PokeList;
