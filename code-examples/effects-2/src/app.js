import React, { useEffect, useState } from 'react';

async function fetchCharacters() {
  const response = await fetch('https://swapi.dev/api/people/');
  const { results } = await response.json();
  return results;
}

export function App() {
  return (
    <main>
      <h1>Star wars characters</h1>
    </main>
  );
}
