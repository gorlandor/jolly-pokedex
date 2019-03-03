import React from 'react';
import { BerryListView } from './BerryList.jsx';
import { PokemonListView } from './PokemonList.jsx';
import { Tabs } from './Tabs.jsx';

function App() {
    return (
        <React.Fragment>
            <header>Jolly Pokedex</header>
            <Tabs />
            <main>
                <BerryListView />
                <PokemonListView />
            </main>
        </React.Fragment>
    );
}

export default App;
