import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, } from 'react-router';
import { Tabs } from "../client/src/components/Tabs.jsx";
import { BerryListView } from "../client/src/components/BerryListView.jsx";
import { PokemonListView } from "../client/src/components/PokemonListView.jsx";
import { getPokemon } from '../client/src/data/pokemon';
import { getBerries } from '../client/src/data/berries';
import "isomorphic-fetch";
const app = express();

app.set('port', process.env.PORT || 5000);

app.use('/static', express.static(path.resolve(__dirname, '../client/public')));

app.get('/*', async function (req, res) {
    const context = {};
    const url = req.url;

    let data = [];
    let reactDomString = "";
    try {
        if (url === "/berries") {
            const berries = await getBerries();
            data = berries.results;
        }

        if (url === "/" || url === "/pokemon") {
            const pokemon = await getPokemon(0, 151);
            data = pokemon.results;
        }

        const jsx = (
            <StaticRouter location={url} context={context}>
                <React.Fragment>
                    <header>Jolly Pokedex</header>
                    <Tabs />
                    <main>
                        {url === "/berries" && (
                            <Route
                                path="/berries/"
                                render={(props) =>
                                    <BerryListView {...props} data={data} />
                                }
                            />
                        )}
                        {url !== "/berries" && (
                            <Route
                                path="/"
                                render={(props) =>
                                    <PokemonListView {...props} data={data} />
                                }
                            />
                        )}
                    </main>
                </React.Fragment>
            </StaticRouter>
        );

        reactDomString = renderToString(jsx);

    } catch (error) {
        reactDomString = "<p>Oops... something went wrong.</p>"
    }

    if (context.url) {
        res.writeHead(301, {
            Location: context.url,
        });
        res.end();
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        res.end(htmlTemplate(reactDomString));
    }
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on http://localhost:'.concat(app.get('port')));
});

function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Jolly Pokedex</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                <link rel="stylesheet" href="./static/bundles/styles.bundle.css">
                <script src="./static/bundles/vendors.bundle.js"></script>
            </head>

            <body>
                <div id="jolly-pokedex">${reactDom}</div>                
            </body>
        </html>
    `;
}
