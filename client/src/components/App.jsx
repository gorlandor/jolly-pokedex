import React from 'react';
import { Route } from 'react-router-dom';
import { BerryListView } from './BerryList.jsx';
import { PokemonListView } from './PokemonList.jsx';
import { Tabs } from './Tabs.jsx';

function App() {
    return (
        <React.Fragment>
            <header>Jolly Pokedex</header>
            <Tabs />
            <main>
                <Route path="/" exact component={PokemonListView} />
                <Route path="/berries/" component={BerryListView} />
                <Route component={PokemonListView} />
            </main>
        </React.Fragment>
    );
}

export default App;
