import React, { useEffect, useState } from 'react';

async function fetchCharacters() {
  const response = await fetch('https://swapi.dev/api/people/');
  const { results } = await response.json();
  return results;
}

export function App() {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const characters = await fetchCharacters();
        setLoading(false);
        setCharacters(characters);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    fetchPeople();
  }, []);

  return (
    <main>
      <h1>Star wars characters</h1>

      {error ? 'Error' : null}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.map((character) => {
            return <li key={character.url}>{character.name}</li>;
          })}
        </ul>
      )}
    </main>
  );
}
