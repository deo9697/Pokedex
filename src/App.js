import { Routes, Route } from 'react-router-dom';
import './App.css';
import PokeList from './components/PokeList';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import PokeDetails from './Pages/PokeDetails';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=116")
      .then((response) => response.json())
      .then((data) => {
        const fetches = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(fetches).then((pokeData) => setPokemons(pokeData));
      })
      .catch((error) => console.error("Errore nel fetch:", error));
  },
    []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>POKEDEX DI KANTO</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<PokeList pokemons={filteredPokemons} />} />
        <Route path="/pokemon/:pokemonName" element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
