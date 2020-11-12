import React, { useEffect, useState } from 'react';
import { getPokemon } from '../data/pokemon';

export function usePokemon() {
    const [pokemon, setPokemon] = useState([]);

    async function fetchPokemon() {
        const { results: pokemon } = await getPokemon();
        setPokemon(pokemon);
    }

    useEffect(() => {

        fetchPokemon();

    }, []);

    return { pokemon, fetchPokemon };
}