import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BerryListView } from './BerryList.jsx';
import { PokemonListView } from './PokemonList.jsx';
import { Tabs } from './Tabs.jsx';

function App() {
    return (
        <React.Fragment>
            <header>Jolly Pokedex</header>
            <Tabs />
            <main>
                <Switch>
                    <Route path="/" exact component={PokemonListView} />
                    <Route path="/berries/" component={BerryListView} />
                    <Route component={PokemonListView} />
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
