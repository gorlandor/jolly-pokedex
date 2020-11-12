import React from 'react';

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