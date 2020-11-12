import React from 'react';
import { PokemonLink } from "./PokemonLink.jsx";
import { secondaryColor } from '../data/constants';

export function PokemonList({ pokemon: pokemonList }) {
    const pokemonSprite = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${id}.png`;
    const pokemonIdRegex = new RegExp(/(pokemon\/[0-9]+)/);
    return (
        <ol>
            {pokemonList.map(function(pokemon, i) {
                const id = pokemonIdRegex.exec(pokemon.url)[0];
                return (
                    <li key={i} style={{ borderBottom: `1px solid ${secondaryColor}` }}>
                        <PokemonLink
                            pokemonLink={pokemon.url}
                            pokemonName={pokemon.name}
                            imageAltText={pokemon.name.concat(' sprite')}
                            imageSource={pokemonSprite(id)}
                        />
                    </li>
                );
            })}
        </ol>
    );
}



