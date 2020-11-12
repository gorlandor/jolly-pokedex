import React from 'react';
import { PokemonList } from "./PokemonList.jsx";
import { usePokemon } from "../hooks/usePokemon";
import {primaryColor} from "../data/constants";

export function PokemonListView({ data: pokemonList = [] }) {
    // const { pokemon: pokemonList} = usePokemon();
    return (
        <React.Fragment>
            <section id={'pokemon'} style={{ maxWidth: "992px", margin: "0 auto"}}>
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
                <PokemonList pokemon={pokemonList} />
            </section>
        </React.Fragment>
    );
}
