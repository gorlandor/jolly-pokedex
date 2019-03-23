import React, { useEffect, useState } from 'react';
import { primaryColor, secondaryColor } from '../data/constants';
import { getPokemon } from '../data/pokemon';

export function PokemonLink({ pokemonName, pokemonLink, imageSource, imageAltText }) {
    return (
        <a
            href={pokemonLink}
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '64px',
                textTransform: 'capitalize',
            }}
        >
            <img src={imageSource} alt={imageAltText} style={{ height: '64px' }} />
            {pokemonName}
        </a>
    );
}

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

function usePokemon() {
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

export function PokemonListView(props) {
    const { pokemon: pokemonList} = usePokemon();
    return (
        <React.Fragment>
            <section id={'pokemon'}>
                <h2
                    style={{
                        color: primaryColor,
                        fontSize: '1.375em',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        borderLeft: `5px solid ${primaryColor}`,
                        paddingLeft: '1em',
                        margin: '0 0 0 8px',
                        height: '2em',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    Pokemon
                </h2>
            </section>
            <PokemonList pokemon={pokemonList} />
        </React.Fragment>
    );
}
